import { BookText } from 'lucide-react'
import { FC } from 'react'

import { Skeleton } from '@/app/components/skeleton'
import { Wrapper } from '@/app/components/wrapper'
import { Source } from '@/app/interfaces/source'

const SourceItem: FC<{ source: Source; index: number }> = ({
  source,
  index,
}) => {
  const { id, name, url } = source
  const domain = new URL(url).hostname
  return (
    <div
      className="rounded-lg flex flex-col text-xs pr-6 transition ease-in-out gap-2 duration-300 relative hover:bg-white"
      key={id}
    >
      <a href={url} target="_blank" className="py-3 px-3">
        <div className="font-medium text-ellipsis text-[14px]/[22px] text-zinc-950 overflow-hidden whitespace-nowrap break-words">
          {index + 1}. {name}
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex flex-none items-center">
            <img
              className="h-4 w-4"
              alt={domain}
              src={`https://www.google.com/s2/favicons?domain=${domain}&sz=${16}`}
            />
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="text-ellipsis w-full text-[14px]/[18px] text-zinc-400 overflow-hidden whitespace-nowrap break-all">
              {domain}
            </div>
          </div>
        </div>
        <div className="flex top-0 right-2 bottom-0 absolute items-center justify-center">
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
  )
}

export const Sources: FC<{ sources: Source[] }> = ({ sources }) => {
  return (
    <Wrapper
      title={<>Sources · {sources.length}</>}
      content={
        <div className="grid gap-2 grid-cols-2 ">
          {sources.length > 0 ? (
            sources.map((item, index) => (
              <SourceItem
                key={item.id}
                index={index}
                source={item}
              ></SourceItem>
            ))
          ) : (
            <>
              <Skeleton className="max-w-sm bg-zinc-200/80 h-16"></Skeleton>
              <Skeleton className="max-w-sm bg-zinc-200/80 h-16"></Skeleton>
              <Skeleton className="max-w-sm bg-zinc-200/80 h-16"></Skeleton>
              <Skeleton className="max-w-sm bg-zinc-200/80 h-16"></Skeleton>
            </>
          )}
        </div>
      }
    ></Wrapper>
  )
}
