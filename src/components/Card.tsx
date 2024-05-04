/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'next'
import { type PostT } from '~/types/PostT'
import Image from 'next/image';
import dbldarrow from '~/assets/dbldarrow.svg'
import dbluarrow from '~/assets/dbluarrow.svg'
import { useState } from 'react';

// DBDBDB
// TODO if there is info after ...
const Card = ({
    id,
    title,
    description,
    tag
}: PostT) => {
    const keep_des = description
    const [des, setDes] = useState<string>(description.length > 400 ? description.slice(0, 200) : description)
    const [expanded, setExpanded] = useState<boolean>(false)
    const expand = () => {
        setDes(keep_des)
        setExpanded(true)
    }
    const dexpand = () => {
        setDes(keep_des.slice(0, 200))
        setExpanded(false)
    }

    return (
        <div className="bg-primary rounded px-8 py-4 flex flex-col gap-4">
            <div className="flex flex-col gap-2 bg-primary flex-wrap">
                <p className="text-xs bg-primary text-[#b5b5b5]">u/developer</p>
                <p className="text-3xl font-semibold bg-primary">{title}</p>
                <p className="bg-primary text-sm text-[#b5b5b5]">{expanded ? des : des}</p>
            </div>
            <div className="flex flex-row justify-between bg-transparent">
                {
                    expanded ?
                    <button onClick={dexpand}>
                        <Image src={dbluarrow} alt="dbl d arrow" width="10" height="10" className="bg-transparent" />
                    </button>
                    :
                    <button onClick={expand}>
                        <Image src={dbldarrow} alt="dbl d arrow" width="10" height="10" className="bg-transparent" />
                    </button>
                }
                <p className="border border-[#282828] rounded-lg text-sm text-[#DBDBDB] px-2 py-1 bg-transparent">{tag}</p>
            </div>
        </div>
    )
}

export default Card