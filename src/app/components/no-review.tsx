import { LucideIcon, Popcorn, Star } from 'lucide-react'
import { ElementType } from 'react'

interface Props {
  icon: LucideIcon,
  content: {
    title: string,
    question: string
  }
  component: ElementType
}


export  function NoResult({icon: Icon,content, component: Component }: Props) {
  return (
    <div className='flex flex-col items-center justify-center space-y-5'>
        <Icon className='size-9 text-[#45455F]' />
        <div className='text-center text-[#B5B6C9]'>
            <p>{content.title}.</p>
            <p>{content.question}?</p>
        </div>
        <Component />
    </div>
  )
}
