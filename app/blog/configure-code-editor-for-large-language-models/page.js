
import CodeViolet from "@/components/CodeViolet";
import { CodeSky, CodeAmber } from "@/components/CodeColors";

const NeovimWithLlm = () => {
  return (
    <div className="">
      <svg xmlns="http://www.w3.org/2000/svg" role="img" width="173" height="50" viewBox="0 0 742 214" aria-label="Neovim">
        <title>Neovim</title>
        <defs>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
            <stop stopColor="#16B0ED" stopOpacity=".8" offset="0%"></stop>
            <stop stopColor="#0F59B2" stopOpacity=".837" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
            <stop stopColor="#7DB643" offset="0%"></stop>
            <stop stopColor="#367533" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
            <stop stopColor="#88C649" stopOpacity=".8" offset="0%"></stop>
            <stop stopColor="#439240" stopOpacity=".84" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <path d="M.027 45.459L45.224-.173v212.171L.027 166.894V45.459z" fill="url(#a)" transform="translate(1 1)"></path>
          <path d="M129.337 45.89L175.152-.149l-.928 212.146-45.197-45.104.31-121.005z" fill="url(#b)" transform="matrix(-1 0 0 1 305 1)"></path>
          <path d="M45.194-.137L162.7 179.173l-32.882 32.881L12.25 33.141 45.194-.137z" fill="url(#c)" transform="translate(1 1)"></path>
          <path d="M46.234 84.032l-.063 7.063-36.28-53.563 3.36-3.422 32.983 49.922z" fillOpacity=".13" fill="#000"></path>
          <g fill="#444">
            <path d="M227 154V64.44h4.655c1.55 0 2.445.75 2.685 2.25l.806 13.502c4.058-5.16 8.786-9.316 14.188-12.466 5.4-3.15 11.413-4.726 18.037-4.726 4.893 0 9.205.781 12.935 2.34 3.729 1.561 6.817 3.811 9.264 6.751 2.448 2.942 4.297 6.48 5.55 10.621 1.253 4.14 1.88 8.821 1.88 14.042V154h-8.504V96.754c0-8.402-1.91-14.987-5.729-19.757-3.82-4.771-9.667-7.156-17.544-7.156-5.851 0-11.28 1.516-16.292 4.545-5.013 3.032-9.489 7.187-13.427 12.467V154H227zM350.624 63c5.066 0 9.755.868 14.069 2.605 4.312 1.738 8.052 4.268 11.219 7.592s5.638 7.412 7.419 12.264C385.11 90.313 386 95.883 386 102.17c0 1.318-.195 2.216-.588 2.696-.393.48-1.01.719-1.851.719h-64.966v1.70c0 6.708.784 12.609 2.353 17.7 1.567 5.09 3.8 9.357 6.695 12.802 2.895 3.445 6.393 6.034 10.495 7.771 4.1 1.738 8.686 2.606 13.752 2.606 4.524 0 8.446-.494 11.762-1.483 3.317-.988 6.108-2.097 8.37-3.324 2.261-1.227 4.056-2.336 5.383-3.324 1.326-.988 2.292-1.482 2.895-1.482.784 0 1.388.3 1.81.898l2.352 2.875c-1.448 1.797-3.362 3.475-5.745 5.031-2.383 1.558-5.038 2.891-7.962 3.998-2.926 1.109-6.062 1.991-9.41 2.65a52.21 52.21 0 01-10.088.989c-6.152 0-11.762-1.064-16.828-3.19-5.067-2.125-9.415-5.225-13.043-9.298-3.63-4.074-6.435-9.06-8.415-14.96C310.99 121.655 310 114.9 310 107.294c0-6.408.92-12.323 2.76-17.744 1.84-5.421 4.493-10.093 7.961-14.016 3.467-3.922 7.72-6.991 12.758-9.209C338.513 64.11 344.229 63 350.624 63zm.573 6c-4.696 0-8.904.702-12.623 2.105-3.721 1.404-6.936 3.421-9.65 6.053-2.713 2.631-4.908 5.79-6.586 9.474S319.55 94.439 319 99h60c0-4.679-.672-8.874-2.013-12.588-1.343-3.712-3.232-6.856-5.67-9.43-2.44-2.571-5.367-4.545-8.782-5.92-3.413-1.374-7.192-2.062-11.338-2.062zM435.546 63c6.526 0 12.368 1.093 17.524 3.28 5.154 2.186 9.5 5.286 13.04 9.298 3.538 4.013 6.238 8.85 8.099 14.51 1.861 5.66 2.791 11.994 2.791 19.002 0 7.008-.932 13.327-2.791 18.957-1.861 5.631-4.561 10.452-8.099 14.465-3.54 4.012-7.886 7.097-13.04 9.254-5.156 2.156-10.998 3.234-17.524 3.234-6.529 0-12.369-1.078-17.525-3.234-5.155-2.157-9.517-5.242-13.085-9.254-3.57-4.013-6.285-8.836-8.145-14.465-1.861-5.63-2.791-11.95-2.791-18.957 0-7.008.93-13.342 2.791-19.002 1.861-5.66 4.576-10.496 8.145-14.51 3.568-4.012 7.93-7.112 13.085-9.299C423.177 64.094 429.017 63 435.546 63zm-.501 86c5.341 0 10.006-.918 13.997-2.757 3.99-1.838 7.32-4.474 9.992-7.909 2.67-3.435 4.664-7.576 5.986-12.428 1.317-4.85 1.98-10.288 1.98-16.316 0-5.965-.66-11.389-1.98-16.27-1.322-4.88-3.316-9.053-5.986-12.519-2.67-3.463-6-6.13-9.992-7.999-3.991-1.867-8.657-2.802-13.997-2.802s-10.008.935-13.997 2.802c-3.991 1.87-7.322 4.536-9.992 8-2.671 3.465-4.68 7.637-6.03 12.518-1.35 4.881-2.026 10.305-2.026 16.27 0 6.026.675 11.465 2.025 16.316 1.35 4.852 3.36 8.993 6.031 12.428 2.67 3.435 6 6.07 9.992 7.91 3.99 1.838 8.656 2.756 13.997 2.756z" fill="currentColor"></path>
            <path d="M530.57 152h-20.05L474 60h18.35c1.61 0 2.967.39 4.072 1.166 1.103.778 1.865 1.763 2.283 2.959l17.722 49.138a92.762 92.762 0 012.551 8.429c.686 2.751 1.298 5.5 1.835 8.25.537-2.75 1.148-5.499 1.835-8.25a77.713 77.713 0 012.64-8.429l18.171-49.138c.417-1.196 1.164-2.181 2.238-2.96 1.074-.776 2.356-1.165 3.849-1.165H567l-36.43 92zM572 61h23v92h-23zM610 153V60.443h13.624c2.887 0 4.78 1.354 5.682 4.06l1.443 6.856a52.7 52.7 0 015.097-4.962 32.732 32.732 0 015.683-3.879 30.731 30.731 0 016.496-2.57c2.314-.632 4.855-.948 7.624-.948 5.832 0 10.63 1.579 14.39 4.736 3.758 3.157 6.57 7.352 8.434 12.585 1.444-3.068 3.248-5.698 5.413-7.894 2.165-2.194 4.541-3.984 7.127-5.367a32.848 32.848 0 018.254-3.068 39.597 39.597 0 018.796-.992c5.111 0 9.653.783 13.622 2.345 3.97 1.565 7.307 3.849 10.014 6.857 2.706 3.007 4.766 6.675 6.18 11.005C739.29 83.537 740 88.5 740 94.092V153h-22.284V94.092c0-5.894-1.294-10.329-3.878-13.306-2.587-2.977-6.376-4.465-11.368-4.465-2.286 0-4.404.391-6.358 1.172a15.189 15.189 0 00-5.144 3.383c-1.473 1.474-2.631 3.324-3.474 5.548-.842 2.225-1.263 4.781-1.263 7.668V153h-22.37V94.092c0-6.194-1.249-10.704-3.744-13.532-2.497-2.825-6.18-4.24-11.051-4.24-3.19 0-6.18.798-8.976 2.391-2.799 1.593-5.399 3.775-7.804 6.54V153H610zM572 30h23v19h-23z" fill="currentColor" fillOpacity=".8"></path>
          </g>
        </g>
      </svg>
      <h1 className="text-xl md:text-2xl font-bold mt-4">How To Configure a Large Language Model with Neovim</h1>
      <h1 className="text-md md:text-xl font-bold text-left mt-8 text-gray-900">
        Table of contents:
      </h1>
      <div className="mt-2 leading-6 md:leading-7 text-sm md:text-md">
        <p>1. Why Should You Use A Large Language Model In Your Computer</p>
        <p>2. How to Download a Large Language Model (LLM)</p>
        <p>3. How to Set Up A Basic Neovim Code Editor</p>
        <p>4. Install The Plugin gen.nvim In Your Neovim To Use an LLM</p>
        <p>5. Use The Large Language Model In Your Code Editor</p>
      </div>
      <p className='mt-8'>I also created a video on this.</p>
      <iframe className="w-[95%] mt-4" width="560" height="315" src="https://www.youtube.com/embed/oQnXAOjMQOw?si=0SIOD-3XRiclECSp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

      <h1 className='font-bold mt-16 text-md md:text-xl'>Why Should You Use a Large Language Model In Your Computer</h1>
      <div className='text-sm md:text-md'>
        <p className='mt-6'>You can download LLMs and use it as a compressed form of internet without you needing an internet connection.</p>
        <p className='mt-4 md:mt-2'>This is better than ChatGPT because you don't have to give your data away.</p>
        <p className='mt-4 md:mt-2'>Software developers like me can use LLMs to answer their questions and to understand code written by someone else.</p>
        <p className='mt-4 md:mt-2'>Writers can leverage this tool to refine their concepts and rephrase their linguistic expressions</p>
      </div>


      <h1 className='font-bold mt-8 md:mt-16 text-md md:text-xl'>How To Download a Large Language Model</h1>
      <div className='text-sm md:text-md'>
        <p className='mt-6 md:mt-4'><a href="https://ollama.com/" className='text-blue-500' target="__blank">Ollama</a> is a great tool that packages LLMs in a way you can use in your computer.</p>
        <p className='mt-4 md:mt-2'>You can download the <span className='text-blue-500'>llama3</span> model</p>
        <p className='mt-4 md:mt-2'>After you download ollama you can use the below command command; the model will download and a chat will open up in the terminal</p>
        <p className='mt-4 md:mt-2'>You can use it as a chat interface to ask any questions.</p>
        <p className='mt-4 md:mt-2'>This chat is also available through an API endpoint which will be used in your neovim</p>

      </div>
      <div className='bg-ubuntu-background rounded-md px-3 py-3 mt-4'>
        <div className='flex space-x-2 items-center'>
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
            <path fill="#66ff00" d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" />
          </svg>
          <p><span className='text-violet-300 text-xs'>homeFolder/Code ~</span><span className='text-white text-xs'> ollama run llama3</span></p>

        </div>
        <p className='text-white'>{`>>>`}<span className='text-gray-400 text-xs ml-2'>{`Send a message (/? for help)`}</span></p>
      </div>
      <p className='mt-4'>When you type 'ollama list' like this </p>
      <div className='bg-ubuntu-background rounded-md px-3 py-3 mt-4'>
        <div className='flex space-x-2 items-center'>
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
            <path fill="#66ff00" d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" />
          </svg>
          <p><span className='text-violet-300 text-xs'>homeFolder/Code ~</span><span className='text-white text-xs'> ollama list</span></p>
        </div>
      </div>
      <p className="mt-4">You will see this output</p>
      <div className='bg-ubuntu-background rounded-md px-3 py-3 mt-4'>
        <div className='flex space-x-2 items-center'>
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
            <path fill="#66ff00" d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" />
          </svg>
          <p><span className='text-violet-300 text-xs'>homeFolder/Code ~</span><span className='text-white text-xs'> ollama list</span></p>
        </div>
        <p className='text-white text-xs'>
          <span>NAME</span>
          <span className='ml-16'>ID</span>
          <span className='ml-20'>SIZE</span>
          <span className='ml-8'>MODIFIED</span>
        </p>
        <p className='text-white text-xs'>
          <span>llama3:latest</span>
          <span className='ml-6'>365c0bd3c000</span>
          <span className='ml-4'>4.7GB</span>
          <span className='ml-6'>3 days ago</span>
        </p>
      </div>

      <h1 className='font-bold mt-12 text-2xl'>How To  Set Up A Basic Neovim Code Editor</h1>
      <p className='mt-4'>Why Neovim?  This is a light-weighted code-editor that you can customize for yourself.</p>
      <p className='mt-2'>Here is a good <a
        href="https://www.youtube.com/watch?v=m8C0Cq9Uv9o&t=0s"
        target="__blank"
        className="bg-pink-50 cursor-pointer text-blue-500">tutorial.</a></p>
      <h1 className='font-bold mt-12 text-2xl'>Install The Plugin gen.nvim In Your Neovim To Use an LLM</h1>
      <p className='mt-2'>Once you have set up your <span className='text-red-500'>init.lua</span>, go to gen.nvim
        <a target="__blank" className='text-blue-500' href="https://github.com/David-Kunz/gen.nvim"> repository</a> by David Kunz</p>
      <p className="mb-4 mt-4">You will see this code in the README.md. Add this code to your <span className='bg-orange-400 px-1 rounded-sm'>init.lua</span> file</p>

      <div className="flex mt-4 text-white rounded-md text-xs md:text-sm">
        <div className='hidden md:block bg-vs-background w-[45px] py-2 px-2'>
        </div>
        <div className='bg-code-background py-4 px-6 md:px-8 relative'>
          <p className='text-xs absolute right-2 top-1'>Add this to your ~/.config/nvim/init.lua</p>
          <span className='mt-4'>{`{`}</span>
          <p className='ml-4'><CodeViolet>"David-Kunz/gen.nvim",</CodeViolet></p>
          <p className='ml-5'>{`opts = {`}</p>
          <p className='ml-6 text-xs text-gray-500'>{`-- The default model to use.`}</p>
          <p className='ml-6'>{`model = `}<CodeSky>"llama3"</CodeSky></p>
          <p className='ml-6 text-xs text-gray-500'>{`-- The host running the ollama service`}</p>
          <p className='ml-6'>{`host = `}<CodeSky>"localhost"</CodeSky></p>
          <p className='ml-6 text-xs text-gray-500'>{`-- The port on which the ollama service is listening`}</p>
          <p className='ml-6'>{`port = `}<CodeSky>"11434"</CodeSky></p>
          <p className='ml-6 text-xs text-gray-500'>{`-- set keymap for close the response window`}</p>
          <p className='ml-6'>{`quit_map = `}<CodeSky>"q"</CodeSky></p>
          <p className='ml-6 text-xs text-gray-500'>{`-- set keymap to re-send the current prompt`}</p>
          <p className='ml-6'>{`retry_map = `}<CodeSky>{"<c-r>"}</CodeSky></p>
          <p className='ml-6'>{`init = function(options) pcall(io.popen, "ollama serve > /dev/null 2>&1 &") end,`}</p>
          <p className='ml-6 text-xs text-gray-500'>{` -- Function to initialize Ollama`}</p>
          <p className='ml-6'><CodeAmber>command = </CodeAmber><CodeSky>function</CodeSky>{`(options)`}</p>
          <p className='ml-6'>{`local body = {model = options.model, stream = true}`}</p>
          <p className='ml-6'>{`return "curl --silent --no-buffer -X POST http://" .. options.host .. ":" .. options.port .. "/api/chat -d $body"`}</p>
          <p className='ml-6'><CodeAmber>end</CodeAmber></p>
          <p className='ml-6 text-xs text-gray-500'>-- The command for the Ollama service. You can use placeholders $prompt, $model and $body (shellescaped).</p>
          <p className='ml-6 text-xs text-gray-500'>-- This can also be a command string.</p>
          <p className='ml-6'>{`display_mode = `}<CodeSky>"split"</CodeSky></p>
          <p className='ml-6'>{`show_prompt = `}<CodeSky>false</CodeSky></p>
          <p className='ml-6'>{`show_model = `}<CodeSky>false</CodeSky></p>
          <p className='ml-6'>{`no_auto_close = `}<CodeSky>false</CodeSky></p>
          <p className='ml-6'>{`debug = `}<CodeSky>false</CodeSky></p>
          <p className='ml-4'>{`}`}</p>
          <span>{`}`}</span>
        </div>
      </div>
      <h1 className='font-bold mt-16 text-xl'>Use The Large Language Model In Your Code Editor</h1>
      <p className='mt-4'>Once you have added above to your init.lua file, close your neovim and reopen it</p>
      <p className='mt-4'>Let's say you want to ask a general question</p>
      <p className='mt-4'>Type colon (:) and then type 'Gen' like this (see bottom) and then press Enter.</p>
      <div className='mt-4 bg-code-background rounded-md relative'>
        <p>There are nice</p>
        <p>There are nice</p>
        <div className='text-white text-sm'>
          <div className='flex justify-between items-center w-full'>
            <div className='flex'>
              <p className='bg-blue-500 px-2 text-black'>Normal</p>
              <p className='px-2'>Git main diff -</p>
              <p className='bg-gray-400 px-2 rounded-sm'>~/path/to/file</p>
            </div>
            <div className='flex'>
              <p className='bg-gray-500 px-2 rounded-sm'>javascript utf-8[unix] 12.22Kib</p>
              <p className='bg-blue-400 text-black px-2 rounded-sm'>140:36</p>
            </div>
          </div>
          <p>:Gen</p>
        </div>
      </div>
      <p className='mt-8'>You will see a dropdown box appear as below:</p>
      <p className='mt-2'>Scroll down and choose 'Chat'</p>
      <div className='mt-4 bg-code-background rounded-md relative'>
        <p>There are nice</p>
        <p>There are nice</p>
        <div className='text-white text-sm'>
          <div className='flex flex-col items-center justify-center text-white w-2/3 mb-4'>
            <div className='border-orange-400 border flex flex-col px-3 rounded-md py-3'>
              <p></p>
              <p>Ask</p>
              <p>Change</p>
              <p>Change Code</p>
              <p className='bg-gray-500 px-2 rounded-sm bg-gray-500'>Chat</p>
              <p>Enhance Code</p>
              <p>Enhance Grammar Spelling</p>
              <p>Enhance Wording</p>
              <p>Generate</p>
              <p>Make Concise</p>
              <p>Make List</p>
              <p>Make Table</p>
            </div>

          </div>
          <div className='flex justify-between items-center w-full'>
            <div className='flex'>
              <p className='bg-blue-500 px-2 text-black'>Normal</p>
              <p className='px-2'>Git main diff -</p>
              <p className='bg-gray-400 px-2 rounded-sm'>~/path/to/file</p>
            </div>
            <div className='flex'>
              <p className='bg-gray-500 px-2 rounded-sm'>javascript utf-8[unix] 12.22Kib</p>
              <p className='bg-blue-400 text-black px-2 rounded-sm'>140:36</p>
            </div>
          </div>
          <p>:Gen</p>
        </div>
      </div>
      <p className='mt-12'>This will create a prompt input at the bottom of your screen where you can type your prompt and then press 'Enter'</p>
      <div className='mt-4 bg-code-background rounded-md relative'>
        <p>There are nice</p>
        <p>There are nice</p>
        <div className='text-white text-sm'>
          <div className='flex justify-between items-center w-full'>
            <div className='flex'>
              <p className='bg-blue-500 px-2 text-black'>Normal</p>
              <p className='px-2'>Git main diff -</p>
              <p className='bg-gray-400 px-2 rounded-sm'>~/path/to/file</p>
            </div>
            <div className='flex'>
              <p className='bg-gray-500 px-2 rounded-sm'>javascript utf-8[unix] 12.22Kib</p>
              <p className='bg-blue-400 text-black px-2 rounded-sm'>140:36</p>
            </div>
          </div>
          <p>:Prompt: Which is the closest plant to the sun<span className='ml-1 bg-gray-500 px-1 py-[0.5px]'></span></p>
        </div>
      </div>
      <p className='mt-12'>You will see the answer appear in the right pane like this:</p>
      <div className='mt-4 bg-code-background rounded-md relative'>
        <div className='flex'>
          <div className='flex flex-col justify-between w-1/2'>
            <div className='bg-code-background'>
            </div>
            <div>
              <div className='mt-4 flex justify-start items-center w-full text-white text-xs'>
                <p className='bg-blue-500 px-2 text-black'>Normal</p>
                <p className='px-1'>Git main diff -</p>
                <p className='bg-gray-400 px-1 text-black'>~/conftest.py</p>
                <p className='bg-gray-500 px-2'>javascript</p>
                <p className='bg-blue-400 text-black px-1'>140:36</p>
              </div>
              <p className='text-white text-xs'>:Prompt: what does this code do<span className='ml-1 bg-gray-500 px-1 py-[0.5px]'></span></p>
            </div>
          </div>
          <div className='text-white text-xs px-4 py-4 w-1/2 border-t border-orange-500 mt-2'>
            <p>The closest planet to the Sun is Mercury, with an average distance of about 58 million kilometers (36 million miles). However, if you're asking about the closest planet-like object or body to the Sun, that would be Venus.</p>
            <p className='mt-4'>Venus is often referred to as Earth's "sister planet" because it's similar in size and mass to our own planet. It has a thick atmosphere that traps heat, making it the hottest planet in the solar system with surface temperatures reaching up to 462°C (863°F).</p>
            <p className='mt-4'>The average distance between Venus and the Sun is about 108 million kilometers (67 million miles), which is relatively close compared to other planets. In fact, Venus is so close to the Sun that its highly elliptical orbit brings it as close as 107 million kilometers (66 million miles) during its closest approach, known as perihelion.</p>
            <p className='mt-4'>So, while Mercury is the closest planet to the Sun in terms of average distance, Venus is the closest in terms of being a planet-like object that's similar in size and composition to our own planet Earth.</p>
          </div>
        </div>
      </div>
      <p className='mt-4'>Or you could highlight your code, type 'Gen' and ask a question like this</p>
      <div className='mt-4 bg-code-background rounded-md relative'>
        <div className='pl-4  pt-4 text-white text-sm'>
          <div className='bg-gray-500 px-2 py-2 w-1/2 rounded-sm'>
            <p><CodeViolet>def </CodeViolet><CodeSky>pytest_collection_modifyitems</CodeSky>(<CodeAmber>config, items</CodeAmber>):</p>
            <p className='ml-4'>{`requires_trainable_backend = pytest.mark.skipif(`}</p>
            <p className='ml-6'><CodeSky>backend() </CodeSky><span className="text-green-300">= "numpy"</span></p>
            <p className='ml-6'><CodeAmber>reason</CodeAmber><span className='text-green-300'>{`="Trainer not implemented for NumPy backend.",`}</span></p>
            <p className='ml-4'>{`)`}</p>
            <p className='ml-4'><CodeViolet>for</CodeViolet> items <CodeViolet>in</CodeViolet> items:</p>
            <p className='ml-8'>if <CodeAmber>"requires_trainable_backend"</CodeAmber> <CodeSky>in</CodeSky> item.keywords:</p>
            <p className='ml-12'>{`item.add_marker(requires_trainable_backend)`}</p>
          </div>
        </div>
        <div className='text-white text-sm mt-4'>
          <div className='flex justify-between items-center w-full'>
            <div className='flex'>
              <p className='bg-blue-500 px-2 text-black'>Normal</p>
              <p className='px-2'>Git main diff -</p>
              <p className='bg-gray-400 px-2 rounded-sm'>~/path/to/file</p>
            </div>
            <div className='flex'>
              <p className='bg-gray-500 px-2 rounded-sm'>python utf-8[unix] 12.22Kib</p>
              <p className='bg-blue-400 text-black px-2 rounded-sm'>140:36</p>
            </div>
          </div>
          <p>{`:'<,'>Gen`}<span className='ml-1 bg-gray-500 px-1 py-[0.5px]'></span></p>
        </div>
      </div>
      <p className='mt-4'>This will open a prompt like below</p>
      <div className='mt-4 bg-code-background rounded-md flex'>
        <div className='flex flex-col justify-between'>
          <div className='pl-4  pt-2 text-white text-sm'>
            <p><CodeViolet>def </CodeViolet><CodeSky>pytest_collection_modifyitems</CodeSky>(<CodeAmber>config, items</CodeAmber>):</p>
            <p className='ml-4'>{`requires_trainable_backend = pytest.mark.skipif(`}</p>
            <p className='ml-6'><CodeSky>backend() </CodeSky><span className="text-green-300">= "numpy"</span></p>
            <p className='ml-6'><CodeAmber>reason</CodeAmber><span className='text-green-300'>{`="Trainer not implemented for NumPy backend.",`}</span></p>
            <p className='ml-4'>{`)`}</p>
            <p className='ml-4'><CodeViolet>for</CodeViolet> items <CodeViolet>in</CodeViolet> items:</p>
            <p className='ml-8'>if <CodeAmber>"requires_trainable_backend"</CodeAmber> <CodeSky>in</CodeSky> item.keywords:</p>
            <p className='ml-12'>{`item.add_marker(requires_trainable_backend)`}</p>
          </div>
          <div className='flex justify-between items-center w-full text-xs'>
            <div className='flex'>
              <p className='bg-blue-500 px-2 text-black'>Normal</p>
              <p className='px-2 text-white'>Git main diff -</p>
              <p className='bg-gray-400 px-2 rounded-sm'>~/conftest.py</p>
            </div>
            <div className='flex'>
              <p className='bg-gray-500 px-2 rounded-sm'>python</p>
              <p className='bg-blue-400 text-black px-2 rounded-sm'>140:36</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center text-white mb-4 text-sm py-3 px-4'>
          <div className='border-orange-400 border flex flex-col px-3 rounded-md py-3'>
            <p></p>
            <p className='bg-gray-500 px-2 rounded-sm bg-gray-500'>Ask</p>
            <p>Change</p>
            <p>Change Code</p>
            <p>Enhance Code</p>
            <p>Chat</p>
            <p>Enhance Grammar Spelling</p>
            <p>Enhance Wording</p>
            <p>Generate</p>
            <p>Make Concise</p>
            <p>Make List</p>
            <p>Make Table</p>
          </div>

        </div>
      </div>
      <div className='mt-4 bg-code-background rounded-md relative'>
        <div className='pl-4  pt-2 text-white text-sm'>
          <p><CodeViolet>def </CodeViolet><CodeSky>pytest_collection_modifyitems</CodeSky>(<CodeAmber>config, items</CodeAmber>):</p>
          <p className='ml-4'>{`requires_trainable_backend = pytest.mark.skipif(`}</p>
          <p className='ml-6'><CodeSky>backend() </CodeSky><span className="text-green-300">= "numpy"</span></p>
          <p className='ml-6'><CodeAmber>reason</CodeAmber><span className='text-green-300'>{`="Trainer not implemented for NumPy backend.",`}</span></p>
          <p className='ml-4'>{`)`}</p>
          <p className='ml-4'><CodeViolet>for</CodeViolet> items <CodeViolet>in</CodeViolet> items:</p>
          <p className='ml-8'>if <CodeAmber>"requires_trainable_backend"</CodeAmber> <CodeSky>in</CodeSky> item.keywords:</p>
          <p className='ml-12'>{`item.add_marker(requires_trainable_backend)`}</p>
        </div>
        <div className='text-white text-sm'>
          <div className='mt-4 flex justify-between items-center w-full'>
            <div className='flex'>
              <p className='bg-blue-500 px-2 text-black'>Normal</p>
              <p className='px-2'>Git main diff -</p>
              <p className='bg-gray-400 px-2 rounded-sm'>~/conftest.py</p>
            </div>
            <div className='flex'>
              <p className='bg-gray-500 px-2 rounded-sm'>javascript utf-8[unix] 12.22Kib</p>
              <p className='bg-blue-400 text-black px-2 rounded-sm'>140:36</p>
            </div>
          </div>
          <p>:Prompt: what does this code do<span className='ml-1 bg-gray-500 px-1 py-[0.5px]'></span></p>
        </div>
      </div>
      <p className='mt-4'>Your screen will be split. Explanations will appear on the right side.</p>

      <div className='mt-4 bg-code-background rounded-md relative'>
        <div className='flex'>
          <div>
            <div className='pl-4 pt-4 text-white text-sm'>
              <div className='bg-gray-500 p-4 rounded-sm'>
                <p><CodeViolet>def </CodeViolet><CodeSky>pytest_collection_modifyitems</CodeSky>(<CodeAmber>config, items</CodeAmber>):</p>
                <p className='ml-4'>{`requires_trainable_backend = pytest.mark.skipif(`}</p>
                <p className='ml-6'><CodeSky>backend() </CodeSky><span className="text-green-300">= "numpy"</span></p>
                <p className='ml-6'><CodeAmber>reason</CodeAmber><span className='text-green-300'>{`="Trainer not implemented for NumPy backend.",`}</span></p>
                <p className='ml-4'>{`)`}</p>
                <p className='ml-4'><CodeViolet>for</CodeViolet> items <CodeViolet>in</CodeViolet> items:</p>
                <p className='ml-8'>if <CodeAmber>"requires_trainable_backend"</CodeAmber> <CodeSky>in</CodeSky> item.keywords:</p>
                <p className='ml-12'>{`item.add_marker(requires_trainable_backend)`}</p>
              </div>
            </div>
            <div className='mt-4 flex items-center w-full text-white text-xs'>
              <p className='bg-blue-500 px-2 text-black'>Normal</p>
              <p className='px-1'>Git main diff -</p>
              <p className='bg-gray-400 px-1 text-black'>~/conftest.py</p>
              <p className='bg-gray-500 px-2'>javascript</p>
              <p className='bg-blue-400 text-black px-1'>140:36</p>
            </div>
            <p className='text-white text-xs'>:Prompt: what does this code do<span className='ml-1 bg-gray-500 px-1 py-[0.5px]'></span></p>
          </div>
          <div className='text-white text-xs px-8 py-4'>
            <p>This is a custom hook function in Pytest that modifies the test collection. Specifically, it adds markers to certain test items based on their keywords.</p>
            <p className='mt-4'>Here is what it does:</p>
            <p><CodeAmber>1.</CodeAmber> It defines a marker `requires_trainable_backend` using the `pytest.mark.skipif` function. This marker will be added to test items that require a trainable backend (e.g., TensorFlow or PyTorch).</p>
            <p><CodeAmber>2.</CodeAmber> It defines a marker `requires_trainable_backend` using the `pytest.mark.skipif` function. This marker will be added to test items that require a trainable backend (e.g., TensorFlow or PyTorch).</p>
            <p><CodeAmber>3.</CodeAmber> For each item, it checks if the item has a keyword called `"requires_trainable_backend"`. This is done using the `in` operator and the `item.keywords` dictionary.</p>

          </div>
        </div>
      </div>
    </div>
  )
};

export default NeovimWithLlm;
