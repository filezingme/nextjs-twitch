'use client'
import qs from 'query-string'
import React, { useState } from 'react'
import { SearchIcon, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export const Search = () => {
    //console.log('I am logged here')

    const router = useRouter()
    const [value, setValue] = useState('')

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() //khi form được submit, e.preventDefault() sẽ ngăn chặn chuyển hướng trang và cho phép bạn xử lý sự kiện submit bằng cách tự do tùy chỉnh hành vi mà không cần load lại trang hoặc điều hướng đến một URL mớ

        if (!value)
            return

        //localhost:3000?tern=value
        const url = qs.stringifyUrl({
            url: '/search',
            query: { tern: value }
        }, { skipEmptyString: true })

        router.push(url)
    }

    const onClear = () => {
        setValue('')
    }

    return (
        <form
            onSubmit={onSubmit}
            className='relative w-full lg:w-[400px] flex items-center'
        >
            <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder='Search'
                className='rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0'
            />
            {value && (
                <X
                    className='absolute top-2.5 right-14 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition'
                    onClick={onClear}
                />
            )}
            <Button
                type='submit'
                size='sm'
                variant='secondary'
                className='rounded-l-none'
            >
                <SearchIcon className='h-5 w-5 text-muted-foreground' />
            </Button>
        </form>
    )
}