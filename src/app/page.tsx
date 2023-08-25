"use client";
import Globe from "@/components/globeWrapper";
import Modal from "@/components/modal";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ReactElement, useState } from "react";
import { data } from "../../public/data";
import Image from "next/image";

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalColor, setModalColor] = useState<string>("");
  const [modalText, setModalText] = useState<ReactElement>(<span></span>);
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <main>
      <div className="flex mt-4 text-center items-center justify-center flex-col">
        <h1 className="text-4xl">{"@Gonçalo@"}</h1>
        <h2 className="text-2xl m-0">
          I&apos;m a 21 years-old developer <br /> who uses{" "}
          <span
            className="relative group text-blue-300 cursor-pointer"
            onClick={() => {
              setModalColor("border-blue-300");
              setModalVisible(true);
              setModalText(
                <div className="flex items-center flex-col justify-center">
                  <div className="text-center w-[400px] min-[320px]:w-fit">
                    <h1 className="underline">React.JS</h1>
                    <span>
                      My language of choice for{" "}
                      <span className="text-blue-300">building</span> websites
                      using <span className="text-blue-300">typescript</span>.
                      I&apos;ve been using shadcn/ui to build UI/UX. Creating
                      applications since 2020, and I&apos;d call myself{" "}
                      <span className="text-blue-300">competent</span>.
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-10 m-10 flex-wrap">
                    {data.react.map((item) => {
                      return (
                        <Card
                          key={Math.random()}
                          className="max-w-md h-[500px] flex justify-center items-center flex-col"
                        >
                          <CardHeader className="space-y-3 text-center">
                            <Image
                              src={`/images/${item.image}`}
                              alt="Netflix Logo"
                              width={300}
                              height={300}
                              className="mx-auto rounded-md"
                            />
                            <div className="space-x-5 bottom-0 ">
                              {item.tags.map((tag) => {
                                return (
                                  <Badge
                                    key={Math.random()}
                                    className={`bg-${tag.color} text-sm`}
                                  >
                                    {" "}
                                    {tag.lang}{" "}
                                  </Badge>
                                );
                              })}
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-5">
                            <div className="flex items-center justify-center flex-col">
                              <CardTitle>{item.title}</CardTitle>

                              <CardDescription className="mt-2">
                                {item.description}
                              </CardDescription>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              );
            }}
          >
            React.JS
            <span className="absolute duration-500 -bottom-1 left-1/2 w-0 h-0.5 bg-blue-300 group-hover:w-1/2 group-hover:transition-all"></span>
            <span className="absolute duration-500 -bottom-1 right-1/2 w-0 h-0.5 bg-blue-300 group-hover:w-1/2 group-hover:transition-all"></span>
          </span>
          {", "}
          <span
            className="relative group text-green-600 cursor-pointer"
            onClick={() => {
              setModalColor("border-green-600");
              setModalVisible(true);
              setModalText(
                <div className="flex items-center flex-col justify-center">
                  <div className="text-center w-[400px] min-[320px]:w-fit">
                    <h1 className="underline">Node.JS</h1>
                    <span>
                      My language of choice for{" "}
                      <span className="text-green-600">web servers</span> using{" "}
                      <span className="text-green-600">express</span> &{" "}
                      <span className="text-green-600">zod</span>. I&apos;ve
                      been using it since 2020, and I&apos;d call myself{" "}
                      <span className="text-green-600">competent</span>.
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-10 m-10 flex-wrap">
                    {data.node.map((item) => {
                      return (
                        <Card
                          key={Math.random()}
                          className="max-w-md h-[500px] flex justify-center items-center flex-col"
                        >
                          <CardHeader className="space-y-3 text-center">
                            <Image
                              src={`/images/${item.image}`}
                              alt="Netflix Logo"
                              width={400}
                              height={400}
                              className="mx-auto rounded-md"
                            />
                            <div className="space-x-5 bottom-0 ">
                              {item.tags.map((tag) => {
                                return (
                                  <Badge
                                    key={Math.random()}
                                    className={`bg-${tag.color} text-sm`}
                                  >
                                    {" "}
                                    {tag.lang}{" "}
                                  </Badge>
                                );
                              })}
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-5">
                            <div className="flex items-center justify-center flex-col">
                              <CardTitle>{item.title}</CardTitle>

                              <CardDescription className="mt-2">
                                {item.description}
                              </CardDescription>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              );
            }}
          >
            Node.JS
            <span className="absolute duration-500 -bottom-1 left-1/2 w-0 h-0.5 bg-green-600 group-hover:w-1/2 group-hover:transition-all"></span>
            <span className="absolute duration-500 -bottom-1 right-1/2 w-0 h-0.5 bg-green-600 group-hover:w-1/2 group-hover:transition-all"></span>
          </span>{" "}
          and{" "}
          <span
            className="relative group text-yellow-400 cursor-pointer"
            onClick={() => {
              setModalColor("border-yellow-400");
              setModalVisible(true);
              setModalText(
                <div className="flex items-center flex-col justify-center">
                  <div className="text-center w-[400px] min-[320px]:w-fit">
                    <h1 className="underline">More Projects</h1>
                    <span>
                      Here are some recent{" "}
                      <span className="text-yellow-400">projects</span> I have
                      worked on while pursuing my degree at university.
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-10 m-10 flex-wrap">
                    {data.more.map((item) => {
                      return (
                        <Card key={Math.random()}>
                          <CardHeader className="space-y-3 text-center">
                            <div className="space-x-5">
                              {item.tags.map((tag) => {
                                return (
                                  <Badge
                                    key={Math.random()}
                                    className={`bg-${tag.color} text-sm`}
                                  >
                                    {" "}
                                    {tag.lang}{" "}
                                  </Badge>
                                );
                              })}
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-5">
                            <div className="flex items-center justify-center flex-col">
                              <CardTitle>{item.title}</CardTitle>

                              <CardDescription className="mt-2">
                                {item.description}
                              </CardDescription>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              );
            }}
          >
            more
            <span className="absolute duration-500 -bottom-1 left-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-1/2 group-hover:transition-all"></span>
            <span className="absolute duration-500 -bottom-1 right-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-1/2 group-hover:transition-all"></span>
          </span>
        </h2>
        <Link href={"/about"} className="m-1 opacity-50">
          (more info)
        </Link>
        <h2 className="text-2xl">
          Let&apos;s work together?{" "}
          <a className="opacity-50" href="mailto:create@">
            Email Me!
          </a>
        </h2>
      </div>
      {modalVisible ? (
        <Modal color={modalColor} text={modalText} onClose={closeModal} />
      ) : (
        <Globe />
      )}
      {/*
      
  */}
    </main>
  );
}
