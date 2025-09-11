import React from "react";
// import k from "01.jpeg";
function CardCom(props) {
  return (
      <div className="mb-5">
        <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
          <img
            class="w-24 h-24 rounded-full mx-auto"
            src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Nature-wallpapers-hd-backgroud-1080p.jpg"
            alt=""
            width="384"
            height="512"
          />
          <div class="pt-6 space-y-4">
            <blockquote>
              <p class="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale on
                large teams. It’s easy to customize, adapts to any design, and
                the build size is tiny.”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400">{props.name}</div>
              <div>Staff Engineer, Algolia</div>
            </figcaption>
            {/* <img src="01.jpeg" alt="" /> */}
          </div>
        </figure>
      </div >
  );
}

export default CardCom;
