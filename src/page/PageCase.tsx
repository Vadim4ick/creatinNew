"use client";

import { GetCaseByIdQuery } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

const PageCase = ({
  caseContent,
}: {
  caseContent: GetCaseByIdQuery["case"]["data"]["attributes"];
}) => {
  return (
    <main className="page">
      <section className="project">
        <article className="project__container">
          {/* HEAD BLOCK */}
          <div className="project__image">
            <Image
              alt=""
              src={getFileUrl(
                caseContent.headBlock.mainImage.data.attributes.url
              )}
              width={caseContent.headBlock.mainImage.data.attributes.width}
              height={caseContent.headBlock.mainImage.data.attributes.height}
            />
          </div>
          <div className="project__head project__head--big">
            <h1 className="project__title ">
              <ReactMarkdown
                skipHtml
                components={{
                  p: ({ children }) => {
                    return <span>{children}</span>;
                  },
                }}
              >
                {caseContent.headBlock.title}
              </ReactMarkdown>
            </h1>
            <div className="project__text">
              <ReactMarkdown skipHtml>
                {caseContent.headBlock.description}
              </ReactMarkdown>
            </div>
          </div>
          <div className="project__images">
            {caseContent.headBlock.subTitleImage.data.map((el) => (
              <div key={el.id} className="project__image">
                <Image
                  src={getFileUrl(el.attributes.url)}
                  alt=""
                  width={el.attributes.width}
                  height={el.attributes.height}
                />
              </div>
            ))}
          </div>

          {caseContent.headBlock.textBlocks.map((el) => (
            <div key={el.id} className="project__head">
              <h2 className="project__title" data-observe>
                {el.titlle}
              </h2>
              <div className="project__text">
                <ReactMarkdown skipHtml>{el.description}</ReactMarkdown>
              </div>
            </div>
          ))}
          {/* / HEAD BLOCK */}

          {caseContent.firstBlock.images.data.map((el) => (
            <div key={el.id} className="project__image">
              <Image
                alt=""
                src={getFileUrl(el.attributes.url)}
                width={el.attributes.width}
                height={el.attributes.height}
              />
            </div>
          ))}

          <div className="project__info">
            <h2 className="project__title" data-observe>
              {caseContent.firstBlock.textBlock.titlle}
            </h2>
            <div
              className="project__text"
              //   @ts-ignore
              style={{ "--margin": "459px", "--width": "643px" }}
            >
              <ReactMarkdown skipHtml>
                {caseContent.firstBlock.textBlock.description}
              </ReactMarkdown>
            </div>
          </div>

          {/* FIRST BLOCK */}

          {/* SECOND BLOCK */}

          {caseContent.secondBlock.images.data.map((el, i) => {
            if (
              i % 3 === 0 &&
              i !== caseContent.secondBlock.images.data.length - 1
            ) {
              return (
                <div key={el.id} className="project__images">
                  <div className="project__image">
                    <img src={getFileUrl(el.attributes.url)} alt="" />
                  </div>

                  <div className="project__image">
                    <img
                      src={getFileUrl(
                        caseContent.secondBlock.images.data[i + 1]?.attributes
                          .url
                      )}
                      alt=""
                    />
                  </div>
                </div>
              );
            }
            // Оставить изображения одинарными, если индекс кратен 3 или последний
            else if (
              i % 3 === 2 ||
              i === caseContent.secondBlock.images.data.length - 1
            ) {
              return (
                <div key={el.id} className="project__image">
                  <img src={getFileUrl(el.attributes.url)} alt="" />
                </div>
              );
            }
            // Не возвращать ничего для изображений, которые уже добавлены в предыдущий блок
            else {
              return null;
            }
          })}

          <div className="project__info">
            <h2 className="project__title" data-observe>
              {caseContent.secondBlock.textBlock.titlle}
            </h2>
            <div
              className="project__text"
              //   @ts-ignore
              style={{ "--margin": "504px", "--width": "600px" }}
            >
              <ReactMarkdown skipHtml>
                {caseContent.secondBlock.textBlock.description}
              </ReactMarkdown>
            </div>
          </div>

          {/* / SECOND BLOCK */}
          {/* TEST */}
          {/*
          <div className="project__image">
            <picture>
              <source
                media="(max-width: 767px)"
                src="/img/project/16-mob.png"
              />
              <img src="/img/project/16.png" alt="" />
            </picture>
          </div>
          <div className="project__grid">
            <div className="project__image project__image--big">
              <picture>
                <source
                  media="(max-width: 767px)"
                  src="/img/project/17-mob.png"
                />
                <img src="/img/project/17.png" alt="" />
              </picture>
            </div>
            <div className="project__image">
              <picture>
                <source
                  media="(max-width: 767px)"
                  src="/img/project/18-mob.png"
                />
                <img src="/img/project/18.png" alt="" />
              </picture>
            </div>
            <div className="project__image">
              <picture>
                <source
                  media="(max-width: 767px)"
                  src="/img/project/19-mob.png"
                />
                <img src="/img/project/19.png" alt="" />
              </picture>
            </div>
          </div>
          <div className="project__image">
            <picture>
              <source
                media="(max-width: 767px)"
                src="/img/project/20-mob.png"
              />
              <img src="/img/project/20.png" alt="" />
            </picture>
          </div>
          <div className="project__image">
            <picture>
              <source
                media="(max-width: 767px)"
                src="/img/project/21-mob.png"
              />
              <img src="/img/project/21.png" alt="" />
            </picture>
          </div>
          <div className="project__info">
            <h2 className="project__title" data-observe>
              сувенирная продукция
            </h2>
            <div
              className="project__text"
              //   @ts-ignore
              style={{ "--margin": "345px", "--width": "643px" }}
            >
              <p>
                Копирайт проникает в сердца и будит в читателе поэтические
                чувства.
              </p>
              <p>
                Общение с аудиторией через сувенирную продукцию пронизано
                мыслями загадочного писателя.
              </p>
            </div>
          </div>
          <div className="project__image">
            <picture>
              <source
                media="(max-width: 767px)"
                src="/img/project/22-mob.png"
              />
              <img src="/img/project/22.png" alt="" />
            </picture>
          </div>
          <div className="project__images">
            <div className="project__image">
              <picture>
                <source
                  media="(max-width: 767px)"
                  src="/img/project/23-mob.png"
                />
                <img src="/img/project/23.png" alt="" />
              </picture>
            </div>
            <div className="project__image">
              <picture>
                <source
                  media="(max-width: 767px)"
                  src="/img/project/24-mob.png"
                />
                <img src="/img/project/24.png" alt="" />
              </picture>
            </div>
          </div>
          <div className="project__image">
            <picture>
              <source
                media="(max-width: 767px)"
                src="/img/project/25-mob.png"
              />
              <img src="/img/project/25.png" alt="" />
            </picture>
          </div>
          <div className="project__images">
            <div className="project__image">
              <picture>
                <source
                  media="(max-width: 767px)"
                  src="/img/project/26-mob.png"
                />
                <img src="/img/project/26.png" alt="" />
              </picture>
            </div>
            <div className="project__image">
              <picture>
                <source
                  media="(max-width: 767px)"
                  src="/img/project/27-mob.png"
                />
                <img src="/img/project/27.png" alt="" />
              </picture>
            </div>
          </div>
          <div className="project__image">
            <picture>
              <source
                media="(max-width: 767px)"
                src="/img/project/28-mob.png"
              />
              <img src="/img/project/28.png" alt="" />
            </picture>
          </div>
          <div className="project__image">
            <picture>
              <source
                media="(max-width: 767px)"
                src="/img/project/29-mob.png"
              />
              <img src="/img/project/29.png" alt="" />
            </picture>
          </div>
          <div className="project__info">
            <h2 className="project__title" data-observe>
              коммуникационные <br />
              материалы
            </h2>

            <div
              className="project__text"
              //   @ts-ignore
              style={{ "--margin": "362px", "--width": "511px" }}
            >
              <p>тот же приём используется на рекламных и промо-носителях</p>
              <p>
                Визуальные образы картин, где искусство образует мост между
                прошлым и настоящим, а копирайт выступает диалогом между автором
                и читателем.
              </p>
            </div>
          </div>
          <div className="project__grid">
            <div className="project__image">
              <picture>
                <source
                  media="(max-width: 767px)"
                  src="/img/project/30-mob.png"
                />
                <img src="/img/project/30.png" alt="" />
              </picture>
            </div>
            <div className="project__image project__image--big">
              <picture>
                <source
                  media="(max-width: 767px)"
                  src="/img/project/31-mob.png"
                />
                <img src="/img/project/31.png" alt="" />
              </picture>
            </div>
            <div className="project__image">
              <picture>
                <source
                  media="(max-width: 767px)"
                  src="/img/project/32-mob.png"
                />
                <img src="/img/project/32.png" alt="" />
              </picture>
            </div>
          </div> */}
        </article>
      </section>
    </main>
  );
};

export { PageCase };
