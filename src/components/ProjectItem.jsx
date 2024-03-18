import React from 'react'

const ProjectItem = ({img , title, techstack, preview , github}) => {

  const handleLivePreviewClick = () => {
    // Handle live preview button click
    window.open(preview, '_blank');
  };

  const handleGithubClick = () => {
    // Handle github button click
    window.open(github, '_blank');
  };

  return (
    <div className="bg-slate-600 border border-gray-800 rounded-2xl p-5 flex-1 cursor-pointer hover:bg-gray-500">
    <img 
    src={img} className="w-full h-60" />
    <h3 className="text-2xl font-semibold text-center mt-8">{title}
    </h3>
    <h4 className="text-gray-400 font-semibold text-center text-lg mt-2">
      {techstack}
    </h4>
    <div className="flex gap-2 mt-12">
      <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
        onClick={handleLivePreviewClick}
      >
        Live preview
      </button>
      <button className=" flex-1 text-sm py-3  bg-gradient-to-t from-blue-400  to-cyan-300 border rounded-full  hover:border-blue-500 hover:text-blue-500"
      onClick={handleGithubClick}
      >
        Checkout github
      </button>
    </div>
  </div>
  )
}

export default ProjectItem
