import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  const projectCreators = ["Dhyan Rai BM", "Pranam Hebbar", "ShanuPrakash", "Hulan Changappa"];
  const techStack = [
    { category: "Frontend", technologies: ["JavaScript (Next.js)", "Tailwind CSS", "Cloudinary API"] },
    { category: "Backend", technologies: ["Node.js (Express.js)", "MongoDB"] },
    { category: "Deployment", technologies: ["Vercel", "Cloudinary"] },
    { category: "Version Control", technologies: ["Git", "GitHub"] },
  ];

  return (
    <>
      <section className="home">
        <div className="">
          <div className="flex justify-around">
          <h1 className="home-heading ">
            AI Image Enhancer Imagenary
          </h1>
            <div className="border-b-2 border-l-2 bordder-t-2 p-2 rounded-lg ">
            <h2 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-300"><span className="underline">Project By :</span></h2>

              <ul className="text-white ml-3">
                {projectCreators.map((creator, index) => (
                  <li className="text-base font-semibold text-gray-400" key={index}>{creator}</li>
                ))}
              </ul>
            </div>
          </div>
          <ul className="flex-center w-full gap-20 mt-10">
            {navLinks.slice(1, 5).map((link) => (
              <Link
                key={link.route}
                href={link.route}
                className="flex-center flex-col gap-2"
              >
                <li className="flex-center w-fit rounded-full bg-white p-4">
                  <Image src={link.icon} alt="image" width={24} height={24} />
                </li>
                <p className="p-14-medium text-center text-white">{link.label}</p>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="mt-10 mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-300"><span className="underline">Tech Stack Used :</span></h1>
          <div className="space-y-2 xl:col-span-3 ml-2">
              <div className="">
                <div>
                  <h2 className="font-bold leading-8 tracking-tight">
                    <span
                      className="text-gray-300"
                    >
                      JavaScript (Next.js):
                    </span>
                  </h2>
                </div>
                <div className=" ml-2 prose max-w-none text-gray-400 dark:text-gray-400">
                Next.js provides a robust framework for building React applications with server-side rendering and simplified routing, enhancing performance and SEO.
                </div>
              </div>
          </div>

          <div className="space-y-2 xl:col-span-3 ml-2">
              <div className="">
                <div>
                  <h2 className="font-bold leading-8 tracking-tight">
                    <span
                      className="text-gray-300"
                    >
                      CSS (Tailwind):
                    </span>
                  </h2>
                </div>
                <div className=" ml-2 prose max-w-none text-gray-400 dark:text-gray-400">
                Tailwind CSS offers a utility-first approach to styling, making it easy to create responsive and customizable designs with concise and readable code.
                </div>
              </div>
          </div>

          <div className="space-y-2 xl:col-span-3 ml-2">
              <div className="">
                <div>
                  <h2 className="font-bold leading-8 tracking-tight">
                    <span
                      className="text-gray-300"
                    >
                      Cloudinary API:
                    </span>
                  </h2>
                </div>
                <div className=" ml-2 prose max-w-none text-gray-400 dark:text-gray-400">
                Cloudinary simplifies image management by providing powerful tools for uploading, transforming, optimizing, and delivering images, enhancing the performance and user experience of web applications.
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* <section className="home" >
        <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-6 rounded-lg">
        <h1 className="mt-10 mb-4 text-2xl font-extrabold leading-none tracking-tight text-white"><span className="underline underline-offset-3 decoration-4 decoration-blue-400 dark:decoration-blue-600">Project By -</span></h1>

          <ul className="text-white">
            {projectCreators.map((creator, index) => (
              <li className="text-lg font-semibold text-white" key={index}>{creator}</li>
            ))}
          </ul>
          <h1 className="mt-10 mb-4 text-2xl font-extrabold leading-none tracking-tight text-white"><span className="underline underline-offset-3 decoration-4 decoration-blue-400 dark:decoration-blue-600">Tech Stack Used -</span></h1>
          <div className="space-y-5 xl:col-span-3">
            <div className="space-y-2">
              <div>
                <h2 className="font-bold leading-8 tracking-tight">
                  <span
                    className="text-white"
                  >
                    JavaScript (Next.js)
                  </span>
                </h2>
              </div>
              <div className="prose max-w-none text-gray-500 dark:text-gray-400">
              Next.js provides a robust framework for building React applications with server-side rendering and simplified routing, enhancing performance and SEO.
              </div>
            </div>
        </div>
      </div>
      </section> */}
    </>
  );
};

export default Home;
