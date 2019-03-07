//--------------------------------------
//       SVG Icons
//--------------------------------------
//...????  Does not seem to work consistently!
const handleOnClick = e => {
  console.log("....> Clicked: ", e.target.id);
};

export const FbIcon = props => {
  return (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <title>Facebook icon</title>
      <path
        id="fb"
        onClick={e => handleOnClick(e)}
        d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"
      />
    </svg>
  );
};
export const LiIcon = props => {
  return (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <title>LinkedIn icon</title>
      <path
        id="li"
        onClick={e => handleOnClick(e)}
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
};
export const MsIcon = props => {
  return (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <title>Microsoft icon</title>
      <path
        id="ms"
        onClick={e => handleOnClick(e)}
        d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z"
      />
    </svg>
  );
};
export const GlIcon = props => {
  return (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <title>Google icon</title>
      <path
        id="gl"
        onClick={e => handleOnClick(e)}
        d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
      />
    </svg>
  );
};
export const YaIcon = props => {
  return (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <title>Yandex icon</title>
      <path
        id="ya"
        onClick={e => handleOnClick(e)}
        d="M1.902 16.349v-2.85L0 8.398h.957l1.4 3.938L3.97 7.573h.877l-2.069 5.96v2.815h-.876zm5.638 0h-.734c-.033-.125-.065-.3-.075-.447h-.057c-.246.313-.559.525-1.051.525-.798 0-1.344-.601-1.344-1.704 0-1.2.611-1.956 2.18-1.956h.123v-.333c0-.735-.246-1.048-.735-1.048-.445 0-.824.234-1.112.49l-.167-.766c.256-.213.766-.447 1.336-.447.99 0 1.533.424 1.533 1.781v2.636c0 .534.055 1.002.1 1.267l.003.002zm-.955-2.925h-.101c-1.08 0-1.313.479-1.313 1.2 0 .645.21 1.067.655 1.067.3 0 .601-.2.757-.445l.002-1.822zm2.802 2.925h-.869v-5.621h.869v.491h.056c.154-.21.578-.556 1.101-.556.732 0 1.121.412 1.121 1.268v4.418h-.878v-4.34c0-.423-.188-.57-.524-.57-.364 0-.675.279-.877.559v4.35l.001.001zm3.135-2.592c0-2.08.78-3.094 1.901-3.094.268 0 .545.09.713.211V8.398h.869v7.95h-.645l-.069-.445h-.055c-.245.312-.556.521-1.013.521-1.1 0-1.699-.933-1.699-2.667h-.002zm2.615-2.115c-.176-.176-.366-.266-.656-.266-.7 0-1.035 1.057-1.035 2.202 0 1.313.246 2.114.881 2.114.436 0 .666-.213.811-.435v-3.615zm3.604 4.785c-1.155 0-1.869-.924-1.869-2.647 0-1.804.501-3.116 1.69-3.116.935 0 1.544.701 1.544 2.604v.478h-2.331c0 1.268.355 1.935 1.045 1.935.489 0 .847-.222 1.068-.378l.2.667c-.354.278-.79.456-1.345.456l-.002.001zm-.957-3.394h1.435c0-.957-.155-1.657-.656-1.657-.532 0-.72.657-.78 1.657h.001zm6.095-2.292l-1.045 2.625L24 16.349h-.899l-.87-2.314-.844 2.313h-.855l1.166-2.904-1.057-2.702h.901l.727 2.035.765-2.036h.846z"
      />
    </svg>
  );
};
export const WeIcon = props => {
  return (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <title>Tencent Weibo icon</title>
      <path
        id="we"
        onClick={e => handleOnClick(e)}
        d="M4.252 23.936a.97.97 0 0 1-.474-.466c-.08-.167-.086-.222-.086-.653 0-.93.15-2.428.362-3.587.698-3.827 2.373-7.127 4.915-9.671l.574-.58-.074-.293c-.14-.561-.079-1.306.149-1.826.25-.564.784-1.142 1.3-1.416.134-.071.25-.127.253-.123.008 0 .066-.021.137-.049.07-.03.153-.061.189-.068.034-.006.095-.023.14-.034a2.93 2.93 0 0 1 1.341 0c.038.007.11.031.165.052.05.02.091.027.091.02 0-.01.172.072.375.177.61.315 1.03.75 1.317 1.362.222.465.273.704.271 1.248-.004.398-.017.506-.095.764-.182.605-.45 1.004-.965 1.456-.117.1-.25.202-.295.23a7.209 7.209 0 0 1-.54.268c-.011.005-.04.019-.068.03-.027.013-.091.026-.144.036a.562.562 0 0 0-.127.035c-.014.01-.119.026-.23.038-.111.01-.255.023-.32.033-.148.021-.609-.031-.872-.096a3.027 3.027 0 0 1-.623-.262l-.26-.137-.11.08c-.146.114-.835.85-1.186 1.27-2.335 2.805-3.652 6.45-3.827 10.62-.027.628-.052.913-.088 1.023-.072.193-.28.419-.472.512a.993.993 0 0 1-.723.007zm7.853-7.88a1.684 1.684 0 0 0-.307-.038 5.104 5.104 0 0 1-.839-.105c-.038-.007-.126-.021-.2-.035a.753.753 0 0 1-.166-.037.566.566 0 0 0-.122-.034 1.821 1.821 0 0 1-.23-.069.535.535 0 0 0-.147-.048 2.58 2.58 0 0 1-.28-.086 1.747 1.747 0 0 0-.28-.082c-.025.017-.34-.208-.418-.3-.212-.253-.29-.643-.182-.903.148-.343.504-.6.849-.609.116-.003.23.01.256.034.028.02.05.031.05.017 0-.013.036.004.083.035s.086.044.086.031c0-.014.022-.012.045.007.044.037.335.136.462.163.04.007.089.022.106.031s.08.029.143.037c.065.006.246.042.407.073.315.058 1.33.089 1.54.044.064-.014.197-.035.289-.044.096-.007.195-.024.223-.035.029-.01.1-.024.154-.034.14-.024.287-.057.393-.095.027-.011.12-.038.203-.063.084-.02.191-.057.238-.077.049-.019.11-.038.139-.045.023-.005.23-.1.46-.213a6.243 6.243 0 0 0 2.29-1.92c.275-.394.699-1.232.843-1.677.721-2.254.147-4.733-1.478-6.372a6.522 6.522 0 0 0-2.328-1.457 4.057 4.057 0 0 0-.412-.123 3.08 3.08 0 0 1-.246-.057 3.39 3.39 0 0 0-.188-.048 3.985 3.985 0 0 0-.479-.066 2.042 2.042 0 0 1-.273-.037c-.055-.02-.855-.013-1.06.007-.243.02-.396.044-.564.077a3.96 3.96 0 0 1-.257.052l-.171.038-.137.034a.608.608 0 0 0-.1.032.096.096 0 0 0-.057.027c-.015.016-.059.027-.099.027a.191.191 0 0 0-.114.041c-.023.024-.04.028-.04.013 0-.017-.024-.01-.05.015-.03.023-.052.03-.052.02 0-.014-.036-.005-.076.02-.045.02-.093.045-.113.048-.071.014-.729.348-.93.48-.462.29-.627.423-1.054.85-.533.53-.818.924-1.145 1.575a6.276 6.276 0 0 0-.581 3.931c.06.359.143.65.304 1.088.061.163.068.23.044.367-.098.55-.707.957-1.152.772-.065-.026-.12-.045-.12-.033 0 .037-.287-.2-.376-.312a1.87 1.87 0 0 1-.205-.42c-.469-1.301-.55-2.946-.216-4.368a8.318 8.318 0 0 1 1.587-3.222c.315-.39.991-1.053 1.358-1.337.274-.21.899-.622.944-.622.007 0 .13-.069.273-.155a2.15 2.15 0 0 1 .26-.136c0 .01.065-.018.147-.058.079-.042.16-.08.178-.082.02-.004.096-.035.171-.065.075-.036.136-.055.14-.048 0 .005.027-.007.058-.035.034-.024.06-.034.06-.02 0 .015.023.008.05-.017.027-.024.05-.03.05-.018 0 .014.025.007.052-.017s.051-.03.051-.016.025.006.052-.018c.027-.023.05-.033.05-.02 0 .01.043.003.096-.018.052-.02.12-.043.156-.05.054-.015.163-.04.246-.061a.887.887 0 0 0 .101-.032c.038-.01.124-.03.189-.04.065-.01.263-.042.437-.068.237-.038.537-.05 1.215-.043.492.007.945.021.998.031.058.012.172.031.254.041.086.015.214.038.29.059.079.016.192.04.257.052a.629.629 0 0 1 .154.037.23.23 0 0 0 .082.034c.1.024.16.04.17.045.006.007.017.01.035.012l.264.09c.134.044.246.084.255.084s.05.022.086.043c.037.02.08.037.096.04.014 0 .072.028.127.056.057.03.102.046.102.037 0-.024.742.379.949.516.105.072.22.148.252.164.347.212.861.643 1.283 1.077a8.174 8.174 0 0 1 2.154 4.07c.082.414.096.555.108 1.334.015.998-.024 1.392-.215 2.14-.402 1.574-1.23 2.908-2.541 4.098a10 10 0 0 1-1.22.882c-.18.108-1.044.537-1.044.52 0-.01-.033.004-.074.028-.045.024-.086.045-.096.045-.011 0-.125.04-.258.084-.128.045-.246.086-.255.086l-.069.028a.569.569 0 0 1-.137.037c-.167.035-.24.052-.269.069a.554.554 0 0 1-.145.037 3.77 3.77 0 0 0-.273.049 5.506 5.506 0 0 1-.715.089c-.575.045-.875.057-.889.04z"
      />
    </svg>
  );
};
