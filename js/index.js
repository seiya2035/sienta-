// js/index.js

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// ==========================================
// 1. 道を走るアニメーション（位置と表示・非表示）
// ==========================================
gsap.to('.road-car__car', {
    scrollTrigger: {
        trigger: '.about', // 開始位置
        start: 'top center',

        endTrigger: '.indoor', // 終了位置
        end: 'top center',

        scrub: 1, // スクロールに連動
        toggleClass: { targets: '.road-car__car', className: 'is-visible' },
        markers: true, // ★完成したら false にして消してください
    },
    motionPath: {
        path: '#carPath',
        align: '#carPath',
        alignOrigin: [0.5, 0.5],
    },
    ease: 'none',
});

// ==========================================
// 2. 回転のアニメーション（追加部分）
// ==========================================

// ① .storage に来たら 15度 に傾ける
// （.aboutから.storageまでは何もしないので0度のままです）
gsap.to('.road-car__car', {
    rotation: 15, // 15度回転
    scrollTrigger: {
        trigger: '.storage', // .storage が基準
        start: 'top center', // 画面中央に来たら回転開始
        end: 'center center', // .storageの真ん中あたりで傾き完了
        scrub: 1, // 滑らかに動かす
    },
});

// ② .run に来たら -15度 に傾ける
// （15度の状態から、グイッと反対の-15度まで回転します）
gsap.to('.road-car__car', {
    rotation: -15, // -15度回転
    scrollTrigger: {
        trigger: '.run', // .run が基準
        start: 'top center', // 画面中央に来たら回転開始
        end: 'center center', // .runの真ん中あたりで傾き完了
        scrub: 1, // 滑らかに動かす
    },
});

document.addEventListener('DOMContentLoaded', function () {
    // id="js-hamburger" の要素を取得
    const hamburger = document.getElementById('js-hamburger');
    const nav = document.getElementById('js-global-nav'); // 追加

    // もしボタンが見つかったら、クリックイベントを追加
    if (hamburger) {
        hamburger.addEventListener('click', function () {
            // is-active クラスをつけたり消したりする
            this.classList.toggle('is-active');
            nav.classList.toggle('is-active');
        });
    }
});
