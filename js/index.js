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
        // markers: true, // ★完成したら false にして消してください
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

// ==========================================
// 3. ヒーローエリアの画像をカクカク動かすアニメーション
// ==========================================

// 対象：左側の4枚、中央、右側の4枚 の外側のdivをまとめて取得
const heroFloatingImages = document.querySelectorAll(
    '.hero-img__left > div, .hero-img__center, .hero-img__right > div'
);

heroFloatingImages.forEach((element) => {
    // 一枚ごとにランダムな設定を作る
    const randomRotation = Math.random() * 10 + 5; // 5度〜15度の間でランダムな角度
    const randomDuration = Math.random() * 1.5 + 1.5; // 1.5秒〜3秒の間でランダムな時間
    const randomDelay = Math.random() * 2; // 開始タイミングをバラバラにする

    // アニメーション実行
    gsap.to(element, {
        rotation: randomRotation, // ランダムな角度まで回転
        duration: randomDuration, // ランダムな時間

        // ★ここが「カクカク」のポイント
        // "steps(3)" は「3コマで動く」という意味です。
        // 数字を小さくするとよりカクカクし、大きくすると滑らかになります。
        ease: 'steps(3)',

        repeat: -1, // 無限に繰り返す
        yoyo: true, // 行ったり来たりする（元の角度に戻る）
        delay: randomDelay, // 開始時間をずらす
        transformOrigin: 'center center', // その場で（中心を軸に）回転
    });
});

$(window).scroll(function () {
    fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述
const popTargets = document.querySelectorAll('.pop-in');

const popOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
};

const popObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, popOptions);

popTargets.forEach(target => {
  popObserver.observe(target);
});