window.addEventListener('load', () => {
  Swal.fire({
      title: 'Do you want to play music in the background?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
  }).then((result) => {
      if (result.isConfirmed) {
          document.querySelector('.song').play();
          animationTimeline();
      } else {
          animationTimeline();
      }
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

    .from(".five", { opacity: 0, y: 10, duration: 0.7 }, "+=1")
    .to("#you", { 
      duration: 0.5, 
      scale: 1.3, 
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
      zIndex: 1, 
      position: "relative" 
    }, "+=0.3")
    .to(".five.gift-hint", { opacity: 0, y: 10, duration: 0.7 }, "+=0.5")
    .from(".five .gift-cover", { 
      duration: 3, 
      opacity: 1,
      scale: 1 // Ensure the scale is set to 1 so it's displayed properly
    }, "+=0.7")
    .to(".five .gift-cover", { 
      duration: 0.01,  // Short duration for quick fade out
      opacity: 0, 
    }, "+=0.01")  // Ensure there’s a slight delay before the GIF appears
    .from(".five .gift-gif", { 
      duration: 0.001,  // Short duration for quick fade in
      opacity: 0, 
    }, "+=0.01")  // Short delay after cover fade out before GIF appears
    .to(".five .gift-gif", { 
      duration: 7, 
      opacity: 1, 
    }, "+=0.5")
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
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
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