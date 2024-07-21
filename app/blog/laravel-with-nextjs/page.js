import CodeViolet from "@/components/CodeViolet";
import { CodeSky, CodeAmber } from "@/components/CodeColors";

const LaravelWithNext = () => {
  return (
    <div className="text-xl leading-8">
      <div className="flex justify-between">
        <svg height="55" viewBox="0 -.11376601 49.74245785 51.31690859"
          width="55" xmlns="http://www.w3.org/2000/svg">
          <path d="m49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1 -.402.694l-9.209 5.302v10.509c0 .286-.152.55-.4.694l-19.223 11.066c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1 -.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054l-19.219-11.066a.801.801 0 0 1 -.402-.694v-32.916c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216zm-36.84-31.068v31.068l17.618 10.143v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-21.483l-4.645-2.676-3.363-1.934zm8.81-5.994-8.007 4.609 8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764 4.645-2.674v-20.096l-3.363 1.936-4.646 2.675v20.096zm24.667-23.325-8.006 4.609 8.006 4.609 8.005-4.61zm-.801 10.605-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937zm-18.422 20.561 11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833z" fill="#ff2d20" />
        </svg>
        <svg aria-label="Next.js logotype" height="50" role="img" viewBox="0 0 394 79" width="300">
          <path d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z" fill="black"></path>
          <path d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z" fill="black"></path><path d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z" fill="var(--geist-foreground)"></path><path d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z" fill="var(--geist-foreground)"></path><path clip-rule="evenodd" d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z" fill="var(--geist-foreground)" fill-rule="evenodd"></path><path d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z" fill="var(--geist-foreground)"></path><path d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z" fill="var(--geist-foreground)"></path><path d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z" fill="black"></path>
        </svg>
      </div>

      <h1 className="mt-8 font-bold">How To Connect a Nextjs front-end with a Laravel Backend With Sanctum</h1>
      <p className="mt-8">Here is how I set up the <span className="bg-red-300 rounded px-1">app/config/cors.php</span>. Note that I added the login and logout routes as well</p>
      <div className="bg-code-background mt-12 rounded-xl p-8 text-gray-300">
          <span className="mt-[-2px] text-sm"><CodeViolet>app/config/cors.php</CodeViolet></span>
        <div className="mt-4 text-md">
          <p><CodeAmber>'paths' </CodeAmber>=&gt; <CodeSky>['api/*', 'sanctum/csrf-cookie', 'login', 'logout', 'register']</CodeSky>,</p>
          <p><CodeAmber>'allowed methods' </CodeAmber>=&gt; <CodeSky>['*']</CodeSky>,</p>
          <p><CodeAmber>'allowed_origins'</CodeAmber> =&gt; <CodeSky>['http://localhost:3000']</CodeSky>,</p>
          <p><CodeAmber>'allowed_origins_patterns'</CodeAmber> =&gt; <CodeSky>[]</CodeSky>,</p>
          <p><CodeAmber>'allowed_headers'</CodeAmber> =&gt; <CodeSky>['*']</CodeSky>,</p>
          <p><CodeAmber>'exposed_headers'</CodeAmber> =&gt; <CodeSky>[]</CodeSky>,</p>
          <p><CodeAmber>'max_age'</CodeAmber> =&gt; <CodeSky>0</CodeSky>,</p>

          <CodeAmber>'supports_credentials'</CodeAmber> =&gt; <CodeSky>true</CodeSky>,

        </div>

      </div>
      <p className="mt-16">I installed Laravel Sanctum according to Laravel documentation</p>
      <div className="text-sm">
        <div className="bg-code-background rounded-xl r p-6 mt-8 text-gray-300">
          <CodeViolet>composer require laravel/sanctum</CodeViolet>
        </div>
        <div className="bg-code-background rounded-xl r p-6 mt-4 text-white">
          <CodeViolet>php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"</CodeViolet>
        </div>
          <div className="bg-code-background rounded-xl r p-6 mt-4 text-white">
            <CodeViolet>php artisan migrate</CodeViolet>
        </div>
      </div>

      <p className="mt-16">Setting up my axios instance after 'npm install axios'</p>
      <div className="bg-code-background rounded-xl text-lg p-8 mt-8 text-gray-300">
        <p>import <CodeViolet>Axios </CodeViolet>from <CodeSky>'axios'</CodeSky></p>
        <p> const axios = <CodeViolet>Axios</CodeViolet>.create(&#10100;</p>
        <p>baseURL: process.env.<CodeSky>NEXT_PUBLIC_BACKEND_URL</CodeSky>,</p>
        <p>headers: &#10100;</p>
        <p className="ml-4"><CodeAmber>"X-Requested-With": "XMLHttpRequest"</CodeAmber></p>
        <p>&#10101;,</p>
        <p className="ml-4">withCredentials: true</p>
        <p>&#10101;)</p>
        <p className="mt-2"><CodeViolet>export default</CodeViolet> <CodeAmber>axios;</CodeAmber></p>
      </div>

      <div className="bg-code-background text-gray-300 rounded-xl text-lg p-8 mt-8">
        <p><span className="font-bold">.env</span></p>
        <p className="mt-4"><span className="text-blue-300">NEXT_PUBLIC_BACKEND_URL</span><span className="text-orange-300">="http://localhost:8000"</span></p>
      </div>

      <p className="mt-12">You will need to call the /sanctum/csrf-cookie endpoint from your nextjs application in laravel to set the authentication cookie</p>
      <p className="mt-4">This will be automatically available once you install Laravel Sanctum as described above</p>

      <p className="mt-4">I hope this helps.</p>



    </div>
  )
};

export default LaravelWithNext;
