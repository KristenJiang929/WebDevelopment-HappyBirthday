window.addEventListener('load', () => {
  Swal.fire({
    title: 'Do you want to play music in the background? <br> <span style="font-size: 12px;">(from your favourite KPOP group ITZY)</span>',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
  }).then((result) => {
    // 用户确认后播放音乐
    if (result.isConfirmed) {
      const song = document.querySelector('.song');
      if (song) {
        song.play();
      }
    }

    // 无论用户选择如何，动画开始并显示页面内容
    document.querySelector('.container').style.visibility = 'visible';
    animationTimeline();  // 开始动画
  });
});


// 动画时间线函数
const animationTimeline = () => {
  // 将需要单独动画处理的字符拆分
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
      .split("")
      .join("</span><span>")}</span>`;
  
  hbd.innerHTML = `<span>${hbd.innerHTML
      .split("")
      .join("</span><span>")}</span>`;
  
  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
}

const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
}

  // 创建 TimelineMax 动画时间线
  const tl = new TimelineMax();

  tl.to(".container", 0.6, { visibility: "visible" })
    .from(".one", 0.7, { opacity: 0, y: 10 })
    .to(".one", 0.7, { opacity: 0, y: 10 }, "+=2")
    .from(".three", 0.5, { opacity: 0, y: 10 })
    .to(".three", 0.5, { opacity: 0, y: 10 }, "+=3")
    .from(".four", 0.3, { scale: 0.2, opacity: 0 })
    .from(".fake-btn", 0.1, { scale: 0.2, opacity: 0 })
    .staggerTo(".hbd-chatbox span", 0.3, { visibility: "visible" }, 0.05)
    .to(".fake-btn", 0.1, { backgroundColor: "rgb(127, 206, 248)" }, "+=2.5")
    .to(".four", 0.2, { scale: 0.2, opacity: 0, y: -150 }, "+=1")

    .from(".five", { 
        opacity: 0, 
        y: 10, 
        duration: 0.7 
    }, "+=1")
    .to("#you", { 
        duration: 0.5, 
        scale: 1.3, 
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff",
        zIndex: 1, 
        position: "relative",
        x: 15,
    }, "+=0.3")
    .to(".five .gift-hint", { 
        opacity: 0, 
        y: 10, 
        duration: 0.7 
    }, "+=0.5")

  // 礼物盒子 wobble 效果
  .from(".five .giftbox", { 
      duration: 1, 
      opacity: 0, 
      scale: 0.5, 
      y: -50, 
      ease: "back.out(1.7)" 
  }, "+=0.7")

  // 礼物盒子打开的动画
  .to(".five .giftbox .cover", { 
      duration: 2, 
      y: -500,  // 盖子飞出屏幕
      ease: "power2.in" 
  }, "+=0.2")

  // 礼物盒主体消失
  .to(".five .giftbox .box", { 
      duration: 1, 
      opacity: 0, 
      scale: 1.2, 
      ease: "power2.out"
  }, "+=0.1")

  // GIF 出现
  .to(".five .gift-gif", { 
      duration: 0.7, 
      opacity: 1 
  }, "+=0.3")

  // 新增：当 GIF 出现后，礼物盒子整个消失
  .to(".five .giftbox", { 
      duration: 0.8, 
      opacity: 0, 
      scale: 0.8, // 如果你希望它缩小
      ease: "power2.out" 
  }, "+=0.2")

  .to(".five .gift-gif", { 
    duration: 10, 
    opacity: 1, 
  }, "+=0.2")
  .from(".five", { opacity: 0, y: 10, duration: 0.7 }, "+=1.5")

  .staggerFromTo(
    ".baloons img",
    2.5, {
      opacity: 0.9,
      y: 1400,
    }, {
      opacity: 1,
      y: -1000,
    },
    0.2
  )
  .from(
    ".profile-picture",
    0.5, {
      scale: 3.5,
      opacity: 0,
      x: 15,
      y: -25,
      rotationZ: -45,
    },
    "-=2"
  )
  .from(".hat", 0.5, {
    x: -110,
    y: 350,
    rotation: -180,
    opacity: 0,
  })
  .staggerFrom(
    ".wish-hbd span",
    0.7, {
      opacity: 0,
      y: -50,
      rotation: 150,
      skewX: "30deg",
      ease: Elastic.easeOut.config(1, 0.5),
    },
    0.1
  )
  .staggerFromTo(
    ".wish-hbd span",
    1, {
      scale: 1.4,
      rotationY: 150,
    }, {
      scale: 1,
      rotationY: 0,
      color: "#19abc2",
      ease: Expo.easeOut,
    },
    0.1,
    "party"
  )
  .from(
    ".wish h5",
    0.7, {
      opacity: 0,
      y: 10,
      skewX: "-15deg",
    },
    "party"
  )
  .staggerTo(
    ".eight svg",
    1.5, {
      visibility: "visible",
      opacity: 0,
      scale: 80,
    },
    0.3
  )
  .to(".six", 0.5, {
    opacity: 0,
    y: 30,
    zIndex: "-1",
  })
  .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
  .to(
    ".last-smile",
    0.6, {
      rotation: 90,
    },
    "+=1"
  );

const replyBtn = document.getElementById("replay")
if (replyBtn) {
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
}
};