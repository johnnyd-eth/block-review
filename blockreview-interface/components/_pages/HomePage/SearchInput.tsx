import { useState } from "react";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Project } from "@/models/project";

interface SearchProps {
  projectData: Record<string, Project>;
}

export function SearchInput({ projectData }: SearchProps) {
  const [search, setSearch] = useState<string>('')

  const searchResults = Object.entries(projectData)
    .filter(([key, project]) =>
      project.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className='flex flex-col items-center relative'>
      <div className="mt-11 text-center max-w-xl w-full">
        <div className="mx-auto flex w-full max-w-xl gap-3">
          <div className="flex w-full items-center gap-2 rounded-lg border border-gray-300 p-5">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              className="flex-1 outline-none placeholder:text-gray-400"
              placeholder="Search any project..."
              onChange={(e) => {
                setSearch(e.target.value)
              }}
            ></input>
          </div>
        </div>

        {search && (
          <div className='mt-1 flex flex-col w-full max-w-xl gap-1 absolute z-10'>
            {searchResults
              .map(([key, project]) => (
                <Link key={project.id} href={`/p/${key}`} passHref>
                  <div className="flex items-center gap-4 p-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 cursor-pointer">
                    <img src={project.logo} alt={project.name} className="h-10 w-10 object-cover" />
                    <span className="text-lg text-gray-800">{project.name}</span>
                  </div>
                </Link>
            ))}

          </div>
        )}
      </div>
    </div>
  );
}
