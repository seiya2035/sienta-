// プラグインを登録（MotionPathPluginを追加）
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

gsap.to('.rect', {
    scrollTrigger: {
        trigger: 'body', // ページ全体をトリガーにする
        start: 'top top', // ページの上が画面の上に来たら開始
        end: 'bottom bottom', // ページの下が画面の下に来たら終了
        scrub: 1, // スクロールに連動（数値は滑らかさ）
        markers: true, // デバッグ用の線を出す
    },

    // ★ここがポイント：パスに沿って動かす設定
    motionPath: {
        path: '#carPath', // HTMLにあるパスのIDを指定
        align: '#carPath', // 四角をパスの上にピタッと乗せる
        alignOrigin: [0.5, 0.5], // 四角の中心(50%, 50%)をパスに合わせる
        autoRotate: true, // パスのカーブに合わせて四角も回転させる（お好みでtrue/false）
    },

    duration: 5, // scrubがある場合、この時間は「進み具合の比率」として扱われます
    ease: 'none', // スクロール連動の場合は等速(none)が自然です
});
