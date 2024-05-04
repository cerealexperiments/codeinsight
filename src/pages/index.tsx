/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import PreviewCard from "~/components/PreviewCard";
import { Button } from '~/components/ui/button'
import { ThemeProvider } from "~/components/theme-provider"
import { ModeToggle } from "~/components/LightDarkModeToggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from "~/components/ui/dropdown-menu";
import { PostT } from "~/types/PostT";
import dar from '~/assets/darrow.svg'
import Image from 'next/image';

export default function Home() {
  const mock_data = [
    {
      id: 1,
      title: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Uno",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum. Lorem Ipsum Lorem Ipsum Lorem Ipsum. Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
      tag: "javascript"
    },
    {
      id: 2,
      title: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Dos",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum. Lorem Ipsum Lorem Ipsum Lorem Ipsum. Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
      tag: "c++"
    },
    {
      id: 3,
      title: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Tres",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum. Lorem Ipsum Lorem Ipsum Lorem Ipsum. Lorem Ipsum Lorem Ipsum Lorem Ipsum. Lorem Ipsum Lorem Ipsum Lorem Ipsum. Lorem Ipsum Lorem Ipsum Lorem Ipsum. Lorem Ipsum Lorem Ipsum Lorem Ipsum. Lorem Ipsum Lorem Ipsum Lorem Ipsum. Lorem Ipsum Lorem Ipsum Lorem Ipsum. Lorem Ipsum Lorem Ipsum Lorem Ipsum. Lorem Ipsum Lorem Ipsum Lorem Ipsum. Lorem Ipsum Lorem Ipsum Lorem Ipsum. Lorem Ipsum Lorem Ipsum Lorem Ipsum. Lorem Ipsum Lorem Ipsum Lorem Ipsum. Lorem Ipsum Lorem Ipsum Lorem Ipsum. Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
      tag: "c#"
    }
  ]
  return (
    <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
    <div className="flex flex-col py-12 gap-2 md:px-32 h-screen">
      <div className="flex flex-row gap-1 items-center w-full">
        <Button variant={"outline"}>All*</Button>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant={"outline"} className="flex gap-2 px-2">
              <p>Tags</p>
              <Image src={dar} alt="dbl d arrow" width="10" height="10" className="bg-transparent" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Languages</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Javascript</DropdownMenuItem>
            <DropdownMenuItem>C++</DropdownMenuItem>
            <DropdownMenuItem>C#</DropdownMenuItem>
            <DropdownMenuItem>Golang</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <ModeToggle />
      </div>
      <div className="flex flex-col gap-2">
        {
          mock_data.map((post:PostT) => {
            return <PreviewCard key={post.id} {...post} />
          })
        }
      </div>
    </div>
    </ThemeProvider>
  );
}
