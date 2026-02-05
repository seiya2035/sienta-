// js/index.js

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// ターゲットを「.road-car__car」に変更します
gsap.to(".road-car__car", { 
  scrollTrigger: {
    trigger: ".white-road", // 道路のエリアを基準にスクロールを監視
    start: ".top center",    // 道路が画面中央に来たら開始
    endTrigger: ".gallery-back", 
    end: "top center", // ギャラリーセクションの「上」が「画面中央」に来たら終了
    scrub: 5,               // スクロールに追従させる
    markers: false           // 動きが確認できたら false に
  },
  y: -50,
  ease: "power2.out", // ★緩やかに動く設定
  motionPath: {
    path: "#carPath",        // SVGの中のパスをなぞる
    align: "#carPath",       // パスの上に車を乗せる
    alignOrigin: [0.5, 0.5], // 車の中心でパスに乗るように
    autoRotate: 90 // 前回の角度調整を忘れずに！
  },
  ease: "none"
});

// gsap.to(".road-car__car", { 
//     scrollTrigger: {
//       trigger: ".white-road", 
//       start: "top center",    // 道路の上が画面中央に来たら開始
//       endTrigger: ".gallery-back", 
//       end: "top center", 
//       scrub: 1,               
//       // ★追加：表示・非表示を切り替える設定
//       // 道路エリアにいる時だけ「is-active」というクラスを車につける
//       toggleClass: { targets: ".road-car__car", className: "is-active" },
//       markers: false           
//     },
//     motionPath: {
//       path: "#carPath",        
//       align: "#carPath",       
//       alignOrigin: [0.5, 0.5], 
//       autoRotate: 90 // 前回の角度調整を忘れずに！
//     },
//     ease: "none"
//   });