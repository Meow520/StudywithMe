import "../styles/App.css";
import python from "../images/Python.png";
import hcj from "../images/html-css-js.jpg";
import MY from "../images/MY.png";
import Meow520 from "../images/mao.jpeg";

export const About = () => {
  return (
    <div className="bg-slate-50 py-10 text-center">
      <div className="mx-auto w-4/5">
        <div className="py-6">
          <h2 className="text-6xl text-emerald-600 py-6">How to use</h2>
          <div className="py-3">
            <h3 className="text-3xl text-emerald-700 py-3">Home</h3>
            <p className="text-xl py-3 ">
              On here, you may enter a task and the subjects of the task. <br />
              Then, you may push "Start!" button and start counitng time.
            </p>
          </div>
          <div className="py-3">
            <h3 className="text-3xl text-emerald-700 py-3">Timer</h3>
            <p className="text-xl py-3 ">
              On here, you have to study. <br />
              If you finish the task, push "Done!" button!
            </p>
          </div>
          <div className="py-3">
            <h3 className="text-3xl text-emerald-700 py-3">Result</h3>
            <p className="text-xl py-3 ">
              On here, you can see the information of the current tasks.
              <br />
              Also, you can save a pdf file which contains the information of tasks.

            </p>
          </div>
        </div>

        <div>
          <div>
            <div className="py-6">
              <h2 className="text-6xl text-emerald-600 py-6">Creater</h2>

              <div className="text-left">
                <div className="flex justify-center">
                  <div className="pr-16">
                    <div className="py-6">
                      <p className="text-4xl py-2 text-emerald-900">Name</p>
                      <p className="text-3xl py-2">Mao Yamaguchi</p>
                    </div>
                    <div className="py-6">
                      <p className="text-4xl py-2 text-emerald-900">Nation</p>
                      <p className="text-3xl py-2">Japan 🇯🇵</p>
                    </div>
                    <div className="py-6">
                      <p className="text-4xl py-2 text-emerald-900">
                        Affiliation
                      </p>
                      <p className="text-3xl py-2">
                        Faculty of Culture and Information Sciense, <br />
                        Doshisha Univ.
                      </p>
                    </div>
                    <div className="py-6">
                      <p className="text-4xl py-2 text-emerald-900">
                        Programming languages
                      </p>
                      <div className="flex">
                        <li className="text-3xl py-2">python</li>
                        <img
                          src={python}
                          alt="python"
                          className="w-8 h-8 mx-4 my-auto"
                        />
                      </div>
                      <div className="flex">
                        <li className="text-3xl py-2">
                          HTML / CSS / JavaScript
                        </li>
                        <img
                          src={hcj}
                          alt="python"
                          className="w-8 h-8 mx-4 my-auto"
                        />
                      </div>
                      <div className="py-6">
                        <p className="text-4xl py-2 text-emerald-900">Hobby</p>
                        <div>
                          <li className="text-3xl py-2">Music</li>
                          <li className="text-3xl py-2">Learning languages</li>
                          <li className="text-3xl py-2">Programming</li>
                        </div>
                      </div>
                      <div className="py-6">
                        <p className="text-4xl py-2 text-emerald-900">GitHub</p>
                        <div className="flex">
                          <a
                            href="https://github.com/Meow520"
                            className="text-3xl py-2 hover:text-emerald-500"
                          >
                            Meow520
                          </a>
                          <img
                            src={Meow520}
                            alt="Meow520"
                            className="w-8 h-8 my-auto mx-4"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src={MY} alt="Mao Yamaguchi" className="w-80 pt-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
