import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor") as HTMLElement;
    const cursorFollower = document.querySelector(".cursor-follower") as HTMLElement;

    if (!cursor || !cursorFollower) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

      setTimeout(() => {
        cursorFollower.style.left = e.clientX + "px";
        cursorFollower.style.top = e.clientY + "px";
      }, 100);
    };

    const handleMouseEnter = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(2)";
      cursorFollower.style.width = "50px";
      cursorFollower.style.height = "50px";
    };

    const handleMouseLeave = () => {
      cursor.style.transform = "translate(-50%, -50%)";
      cursorFollower.style.width = "30px";
      cursorFollower.style.height = "30px";
    };

    document.addEventListener("mousemove", handleMouseMove);

    const hoverElements = document.querySelectorAll(".hover-scale");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" />
      <div className="cursor-follower" />
    </>
  );
}
