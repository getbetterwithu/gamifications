// ===== 사운드 시스템 (5단원) =====
// BGM: audio/*.mp3 (작가 제공, mood 기준 재생)
// SFX: Web Audio 합성 (정답·오답·클릭·획득) — 파일 불필요, 길이 정확
// ⚠️ 시스템 볼륨은 절대 건드리지 않음. 게임 내부 BGM 볼륨만 제어.

const BGM_FILES = {
  main:     'audio/bgm_main.mp3',
  merchant: 'audio/bgm_merchant.mp3',
  storm:    'audio/bgm_storm.mp3',
  boss:     'audio/bgm_boss.mp3',
  ending:   'audio/bgm_ending.mp3',
  sacred:   'audio/bgm_sacred.mp3',  // 성스러운 곡 (S7 관문·S13 황금비)
};
// 곡별 음량 — 전곡 은은한 배경 수준으로 통일. (위기/보스만 살짝 존재감)
const BGM_VOL = {
  main:     0.12,
  merchant: 0.12,
  storm:    0.16,
  boss:     0.18,
  ending:   0.14,
  sacred:   0.14,
};
function _volFor(key) { return BGM_VOL[key] != null ? BGM_VOL[key] : 0.12; }

// 음소거 상태 (localStorage 유지)
let _muted = localStorage.getItem('snd_muted') === '1';
let _curBgmKey = null;

// ---- mood/배경 → BGM 논리키 매핑 ----
// scene step의 mood·bg로 결정. (resume 등 mood 없을 땐 bg만으로 폴백)
function bgmKeyForScene(bg, mood) {
  if (mood === 'storm') return 'storm';
  if (mood === 'sunset') return 'ending';
  if (bg === 'classroom') return 'boss';        // S9 보스전
  if (bg === 'merchant_camp') return 'merchant';// S3·6 상인
  return 'main';                                 // 그 외 평상
}

// ---- BGM 재생 ----
// 호출부 호환: playBgm(key) — key가 논리키(main 등)면 그대로,
// 옛 배경이름(harbor 등)/실배경이면 bgmKeyForScene로 변환.
function playBgm(key) {
  let logical = BGM_FILES[key] ? key : bgmKeyForScene(key, null);
  const url = BGM_FILES[logical];
  if (!url) return;
  const el = document.getElementById('bgm');
  if (!el) return;
  if (_curBgmKey === logical && el.src) return; // 같은 곡이면 끊지 않음
  _curBgmKey = logical;
  el.src = url;
  el.loop = true;
  el.volume = _muted ? 0 : _volFor(logical);
  if (!_muted) el.play().catch(() => {}); // 자동재생 차단 시 첫 클릭 후 재생
}

// scene step 전용 — 명시 bgmKey가 있으면 그걸 최우선, 없으면 mood/bg 자동 매핑
function playBgmForScene(bg, mood, explicitKey) {
  if (explicitKey && BGM_FILES[explicitKey]) { playBgm(explicitKey); return; }
  playBgm(bgmKeyForScene(bg, mood));
}

// ---- SFX: Web Audio 합성 ----
let _actx = null;
function _ac() {
  if (!_actx) { try { _actx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return null; } }
  return _actx;
}
// 단음 톤 (주파수·길이·파형·게인) — ac.currentTime 기준으로 예약
function _tone(ac, freq, dur, when, type, gain) {
  const t0 = ac.currentTime + when;
  const osc = ac.createOscillator(), g = ac.createGain();
  osc.type = type; osc.frequency.value = freq;
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(gain, t0 + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(g).connect(ac.destination);
  osc.start(t0); osc.stop(t0 + dur + 0.02);
}

// 효과음 패턴 (ac running 보장 후 호출)
function _emit(ac, name) {
  switch (name) {
    case 'correct': // 밝은 상행 차임 (도-미-솔)
      _tone(ac, 523.25, 0.14, 0,    'triangle', 0.18);
      _tone(ac, 659.25, 0.14, 0.10, 'triangle', 0.18);
      _tone(ac, 783.99, 0.30, 0.20, 'triangle', 0.20);
      break;
    case 'wrong': // 부드러운 하행 2음 (날카롭지 않게)
      _tone(ac, 392.00, 0.18, 0,    'sine', 0.16);
      _tone(ac, 311.13, 0.30, 0.14, 'sine', 0.16);
      break;
    case 'click': // 짧은 탭 (들리게 키움)
      _tone(ac, 740.00, 0.05, 0, 'triangle', 0.10);
      break;
    case 'get': // 황금 비례판 획득 — 반짝이는 상행 아르페지오
      _tone(ac, 659.25, 0.12, 0,    'triangle', 0.16);
      _tone(ac, 830.61, 0.12, 0.10, 'triangle', 0.16);
      _tone(ac, 987.77, 0.12, 0.20, 'triangle', 0.17);
      _tone(ac, 1318.51,0.45, 0.32, 'triangle', 0.20);
      break;
  }
}

function playSfx(name) {
  if (_muted) return;
  const ac = _ac(); if (!ac) return;
  // 핵심 수정: 컨텍스트가 running 상태가 된 뒤에 톤 예약 (suspended면 첫 소리 유실)
  if (ac.state === 'running') { _emit(ac, name); }
  else { ac.resume().then(() => _emit(ac, name)).catch(() => {}); }
}

// ---- 음소거 토글 ----
function toggleMute() {
  _muted = !_muted;
  localStorage.setItem('snd_muted', _muted ? '1' : '0');
  const el = document.getElementById('bgm');
  if (el) {
    const vol = _curBgmKey ? _volFor(_curBgmKey) : 0.12;
    el.volume = _muted ? 0 : vol;
    if (_muted) el.pause();
    else { el.play().catch(() => {}); }
  }
  const btn = document.getElementById('mute-btn');
  if (btn) btn.textContent = _muted ? '🔇' : '🔊';
}

// 로드 시 음소거 아이콘 동기화
window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('mute-btn');
  if (btn) btn.textContent = _muted ? '🔇' : '🔊';
});

// 첫 사용자 제스처에서 오디오 컨텍스트 깨우기 (브라우저 자동재생 정책 대응)
window.addEventListener('pointerdown', function wake() {
  _ac();
  const el = document.getElementById('bgm');
  if (el && !_muted && el.src && el.paused) el.play().catch(() => {});
  window.removeEventListener('pointerdown', wake);
}, { once: true });
