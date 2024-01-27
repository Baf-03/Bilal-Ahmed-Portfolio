import React from "react";

const CreativeProcess = () => {
  return (
    <div className="relative h-[90rem] w-[85%] ">
      <h2 className="backgroundimage text-[2rem] text-center  md:text-[3rem] font-bold">
        Creative Process
      </h2>
      <p className="w-[85%] mt-9 border-l border-dotted border-red-500 ps-2">
        Creating a digital solution{" "}
        <span className="text-red-500 font-bold ">
          is not as simple as it seems
        </span>{" "}
        . There are several steps, from conception to product launch. Below I
        highlight some of these steps, in summary, so that you can visualize the
        process.
      </p>
    {/* <div className="absolute border w-[100%] border-dotted border-red-500"></div> */}
   
      <div className="flex flex-wrap w-[100%]   mt-9 justify-center">
        <div className="w-[22vw] flex items-center text-center p-4">
          <div className="flex flex-col items-center  ">
            <img
              src="https://eiharold.com/wp-content/uploads/2022/02/icon-planejamento.png"
              alt=""
              className="w-[30%] m-auto"
            />
            <h2 className="font-bold">01. Planning</h2>
            <p className="w-[65%] ">
              We study your idea to outline the best strategy and choose the
              most appropriate digital solutions .
            </p>
          </div>
        </div>
        <div className="w-[22vw] flex items-center text-center p-4">
        <div className="relative flex flex-col items-center ">
            <img
              src="https://eiharold.com/wp-content/uploads/2022/02/icon-prototipagem.png"
              alt=""
              className="w-[30%] m-auto"
            />
            <h2 className="font-bold">02. Prototyping</h2>
            <p className="w-[65%] ">
            Sketch the structure of your project , transferring ideas from the conceptual plan to reality .
            </p>
    <div className="absolute border w-[71vw] border-dotted border-red-500 left-[-145] bottom-[-10%]"></div>
    <div className="absolute border w-[1px] h-[32.33rem] border-dotted border-red-500 left-[0] "></div>


          </div>

        </div>
        <div className="w-[22vw] flex items-center text-center p-4">
        <div className="relative flex flex-col items-center  ">
            <img
              src="https://eiharold.com/wp-content/uploads/2022/02/icone-design-2.png"
              alt=""
              className="w-[30%] m-auto"
            />
            <h2 className="font-bold">03. Design</h2>
            <p className="w-[65%] ">
            I create beautiful , functional and usable screens . No templates, a unique website for every need.
            </p>
    <div className="absolute border w-[1px] h-[32.33rem] border-dotted border-red-500 left-[0] "></div>

          </div>

        </div>
        <div className="w-[22vw] flex items-center text-center p-4">
        <div className="flex flex-col items-center  ">
            <img
              src="https://eiharold.com/wp-content/uploads/2022/02/icone-desenvolvimento-2.png"
              alt=""
              className="w-[30%] m-auto"
            />
            <h2 className="font-bold">04. Development</h2>
            <p className="w-[65%] ">
            With the design approved, it's time to start coding . This is where all the features will be created and your project starts to come to life !
            </p>
          </div>
        </div>
        <div className="w-[22vw] flex items-center text-center p-4">
        <div className="flex flex-col items-center  ">
            <img
              src="https://eiharold.com/wp-content/uploads/2022/02/icon-seo.png"
              alt=""
              className="w-[30%] m-auto"
            />
            <h2 className="font-bold">05. SEO and Metrics</h2>
            <p className="w-[65%] ">
            To finish with a flourish, I employ SEO techniques so that your website performs well and you can monitor the analytics ..
            </p>
          </div>
        </div>
        <div className="w-[22vw] flex items-center text-center p-4">
        <div className="flex flex-col items-center  ">
            <img
              src="https://eiharold.com/wp-content/uploads/2022/02/icon-lancamento-2.png"
              alt=""
              className="w-[30%] m-auto"
            />
            <h2 className="font-bold">06. Launch</h2>
            <p className="w-[65%] ">
            Project finished. As a result, we have a visually pleasing , performant and responsive product . And, of course, another satisfied customer !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeProcess;
