import { BookOpenText } from 'lucide-react'
import { FC } from 'react'
import Markdown from 'react-markdown'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/app/components/popover'
import { Skeleton } from '@/app/components/skeleton'
import { Wrapper } from '@/app/components/wrapper'
import { Source } from '@/app/interfaces/source'

export const Answer: FC<{ markdown: string; sources: Source[] }> = ({
  markdown,
  sources,
}) => {
  return (
    <Wrapper
      title={<>Answer</>}
      content={
        markdown ? (
          <div className="max-w-full text-base prose prose-sm">
            <Markdown
              components={{
                a: ({ node: _, ...props }) => {
                  if (!props.href) return <></>
                  const source = sources[+props.href - 1]
                  if (!source) return <></>
                  return (
                    <span className="w-4 inline-block">
                      <Popover>
                        <PopoverTrigger asChild>
                          <span
                            title={source.name}
                            className="rounded-full cursor-pointer font-medium bg-zinc-300 h-6 text-center transform origin-top-left w-6 scale-[60%] inline-block no-underline hover:bg-zinc-400"
                          >
                            {props.href}
                          </span>
                        </PopoverTrigger>
                        <PopoverContent
                          align={'start'}
                          className="bg-white border flex flex-col max-w-screen-md shadow-transparent text-xs"
                        >
                          <div className="font-medium text-ellipsis text-[14px]/[22px] overflow-hidden whitespace-nowrap">
                            {source.name}
                          </div>
                          <div className="flex gap-4">
                            {source.primaryImageOfPage?.thumbnailUrl && (
                              <div className="flex-none">
                                <img
                                  className="rounded h-16 w-16"
                                  width={source.primaryImageOfPage?.width}
                                  height={source.primaryImageOfPage?.height}
                                  src={source.primaryImageOfPage?.thumbnailUrl}
                                />
                              </div>
                            )}
                            <div className="flex-1">
                              <div className="text-[14px]/[18px] text-zinc-500 break-words line-clamp-4">
                                {source.snippet}
                              </div>
                            </div>
                          </div>

                          <hr className="border-t border-gray-200 my-3 w-full" />
                          <div className="flex text-[14px]/[18px] items-center">
                            <div className="flex-1 overflow-hidden">
                              <div className=" text-blue-500">
                                <a
                                  title={source.name}
                                  href={source.url}
                                  target="_blank"
                                  className="flex items-center"
                                >
                                  <img
                                    className="h-3 mr-1 w-3"
                                    alt={source.url}
                                    src={`https://www.google.com/s2/favicons?domain=${source.url}&sz=${16}`}
                                  />
                                  <span className="text-ellipsis text-[14px]/[24px] overflow-hidden whitespace-nowrap">
                                    {source.url}
                                  </span>
                                  <div className="flex items-center justify-center">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M11 5L4 12"
                                        stroke="#A7A6A1"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M5 4L11.95 4.049L12 11"
                                        stroke="#A7A6A1"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </span>
                  )
                },
              }}
            >
              {markdown}
            </Markdown>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <Skeleton className="max-w-sm bg-zinc-200 h-4"></Skeleton>
            <Skeleton className="max-w-lg bg-zinc-200 h-4"></Skeleton>
            <Skeleton className="bg-zinc-200 h-4 max-w-2xl"></Skeleton>
            <Skeleton className="max-w-lg bg-zinc-200 h-4"></Skeleton>
            <Skeleton className="max-w-xl bg-zinc-200 h-4"></Skeleton>
          </div>
        )
      }
    ></Wrapper>
  )
}
