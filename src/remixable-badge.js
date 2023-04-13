import { LitElement, html, css, svg } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class RemixableBadge extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--remixable-badge-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return svg`
      <main>
      <div xmlns="http://www.w3.org/1999/xhtml" contenteditable="true" style="white-space:pre-wrap;text-align:center;border:0px solid #000000;padding-top:5px;width:100%;">MEDIA</div>
      <div xmlns="http://www.w3.org/1999/xhtml" contenteditable="true" class="first-line-para" style="white-space:pre-wrap;text-align:left;border:0px solid #000000;padding-top:5px;width:100%;">Bryce Schneider<br>Head Honcho<br>HaxTheWeb</div>
      <svg id="TV_fill" data-name="TV fill" data-v-b2c8125e="" data-v-a09c7bce=""><src d="M1067.324,454.5c1.728-10.728,2.809-21.5.919-32.313-.817-4.679-1.7-9.278-.791-14.077a7.088,7.088,0,0,0-2.346-7.033,10.711,10.711,0,0,1-3.684-6.5c-2.055-9.039-7.8-14.265-16.878-15.948a74.635,74.635,0,0,0-11.276-1.359c-7.064-.225-14.078.5-21.115.73a349.115,349.115,0,0,1-39.794-1.219c-16.739-1.367-33.55-1.942-50.34-2.563q-32.709-1.209-65.434-1.918c-12.068-.273-24.067-1.614-36.128-1.921-4.469-.113-8.943-.323-13.4-.686-19.767-1.612-39.537-1.307-59.32-.357-18.816.9-37.619,2.121-56.463,2.359-8.13.1-16.264.125-24.39.373q-40.243,1.225-80.5,1.086c-15.72-.052-31.449-.216-47.155.744-12.714.776-25.412,1.907-38.136,2.379-13.243.492-26.5.739-39.748,1.037,2.472,5.6,6.065,10.707,6.065,17.408,0-6.7-3.593-11.805-6.065-17.408q-4.92.111-9.839.233c-11.366.3-22.721.817-34.1.946-11.794.133-23.587-.053-35.367-.169-15.845-.156-31.708-.6-47.535-1.68a161.03,161.03,0,0,0-18.694-.016c-6.085.292-12.162.683-18.266-.128-12.771-1.7-25.567-2.854-38.5-1.946a253.538,253.538,0,0,1-28.844.856,138.543,138.543,0,0,0-19.092.547,148.3,148.3,0,0,1-28.016-.089c-13.478-1.281-26.888-3.264-40.494-2.638a41.475,41.475,0,0,0-8.855,1.02,48.153,48.153,0,0,1-13.682,1.543,26.832,26.832,0,0,0-8.064.727,56.914,56.914,0,0,1-10.7,2.339,4.655,4.655,0,0,0-4.08,2.306,46.731,46.731,0,0,0-3.794,8.47,75.335,75.335,0,0,1-2.647,8.932,2.79,2.79,0,
                    0,0-.178,2.693c1.526,2.661,1.111,5.47.637,8.316-.547,3.285-1.438,6.589.507,9.813a5.364,5.364,0,0,1,.266,2.8,75.3,75.3,0,0,1-1.677,14.1,30.363,30.363,0,0,0-1.093,6.4c-.118,5.555-.291,11.109-.433,16.663-.253,9.895.651,19.76.726,29.657.166,21.806-1.39,43.627.493,65.421,1.142,13.208.727,26.517,3.269,39.648,2.028,10.48.793,21.127-.491,31.589-1.926,15.7-1.53,31.384-.906,47.087.216,5.424.353,10.828.111,16.246-.32,7.181-.666,14.4,0,21.537.957,10.314.633,20.579.091,30.865a208.256,208.256,0,0,0,.949,33.294A276.981,276.981,0,0,1,93.5,827.04a224.181,224.181,0,0,0-.731,28.423c.543,12.041,1.273,24.083,1.4,36.13.1,10.031,1.007,20.03.855,30.062-.019,1.216.137,2.435.233,3.651.679,8.637,1.506,17.267,1.982,25.915A38.926,38.926,0,0,0,99.1,961.972a87.369,87.369,0,0,1,2.984,11.81c1.985,10.063,7.728,17.419,16.347,22.707a10.072,10.072,0,0,0,6.174,1.656q6.274-.5,12.55-.989c6.993-.557,13.825-.1,20.08,3.485a13.661,13.661,0,0,0,6.99,1.787q7.726,0,15.453.06c1.519.015,3.079-.14,4.523.72-3.1.3-6.2.251-9.292.31-3.151.06-6.343-.3-10.333.427,2.573,2.393,4.952,2.61,7.317,2.839,3.228.313,6.486.43,9.685.928,16.8,2.613,33.709,2.684,50.636,2.173,5.945-.179,11.935-.574,17.83-.4,9.719.28,19.46.344,29.179,1.055,7.835.573,15.674-.787,23.519-.715,29.268.271,58.527-.491,87.792-.581,1.76,0,3.519-.091,5.278-.165,11.348-.48,22.692-1.164,
                    34.045-1.4,12.044-.251,24.09-.13,36.133-.8,7.559-.418,15.139-.452,22.711-.8,13.656-.626,27.338-.389,41.011-.789,19.232-.563,38.485,0,57.732-.316,13.126-.214,26.264-.323,39.387.7,11.205.873,22.456.28,33.693.728,14.6.581,29.236.143,43.856.862,9.319.458,18.667.178,28,.837,7.822.553,15.679.611,23.52.888,2.842.1,5.688.143,8.525.317,11.059.679,22.107,1.641,33.176,2.044,13.517.493,27.035.848,40.542,1.648,12.013.712,24.04,1.446,36.067,1.576,12.866.14,25.694.593,38.509,1.706,6.062.526,12.159.664,18.212,1.258,6.894.677,13.815,1.193,20.665.291a171.27,171.27,0,0,0,42.728-11.018c.7-.286,1.619-.334,1.731-1.609a9.156,9.156,0,0,0-3.865-.269c-6.35.295-12.716.591-19.053.68q-35.547.5-71.091,1.138c-18.413.326-36.8-1.524-55.231-1.035-.27.008-.542-.009-.812-.021-9.723-.441-19.451-.8-29.168-1.349-9.057-.512-18.122-.127-27.192-.669-13.1-.783-26.24-.9-39.365-1.187-15.443-.337-30.881.487-46.336.06-19.223-.532-38.468.377-57.7-.589-9.188-.462-18.392-.611-27.588-.9-2.842-.09-5.706.006-8.522-.312-7.267-.821-14.577-.708-21.858-1.209-8.223-.565-16.472-.768-24.709-1.129,8.4-.853,16.725-1.833,25.146-1.742,14.638.156,29.288.295,43.916-.144,15.724-.473,31.445-.157,47.164-.466,2.164-.042,4.34.074,6.5.247,7.571.608,15.158.737,22.747.887,30.626.605,61.268-.093,91.888,1.192,8.527.358,17.1-.06,25.6.531,16.095,1.118,32.165,2.484,48.321,
                    1.566.945-.054,1.9.009,2.845.023,19.92.293,39.831,1.289,59.762.612,3.789-.128,7.6-.083,11.381.153,14.746.92,29.5,1.756,44.266,2.16,2.858.079,5.664.148,8.333-1.22,1.592-.815,3.419-.732,5.184-.8,10.29-.422,20.578-.9,30.869-1.271a9.845,9.845,0,0,0,5.866-2.377c6.087-4.69,7.865-12.137,11.829-18.178a2.265,2.265,0,0,0,.178-.789c.88-4.656,1.819-9.285,1.556-14.092-.192-3.51-.055-7.043.053-10.563a37.835,37.835,0,0,0-.436-8.1,42.363,42.363,0,0,1-.3-10.13c.362-6.628.949-13.257.992-19.888.072-11,1.871-21.851,2.643-32.789.526-7.437,1.572-14.87.827-22.308-1.314-13.109-1.334-26.239-1.5-39.387-.184-14.371.89-28.7.872-43.066q-.041-32.313.745-64.633c.356-13.809,1.139-27.621.8-41.448a17.249,17.249,0,0,1,.225-3.242c1.154-6.891,1.315-13.727-.835-20.488a27.59,27.59,0,0,1-.833-3.973c-.712-4.424-.527-8.7,2.6-12.29,1.315-1.515,1.076-3.218,1.06-4.99-.091-10.3-1.5-20.557-.811-30.869a169.533,169.533,0,0,0,.351-17.474,88.948,88.948,0,0,1,1.895-20.186,16.151,16.151,0,0,0-.159-8.006,23.585,23.585,0,0,1-.647-10.47,64.855,64.855,0,0,0,.609-8.1c.321-12.714,1.347-25.411.911-38.145-.046-1.345.222-2.7.281-4.051a38.707,38.707,0,0,0,.138-6.486,37.506,37.506,0,0,1,.337-10.52,47.486,47.486,0,0,0,.184-14.172A14.348,14.348,0,0,1,1067.324,454.5ZM195.656,1003.886a46.6,46.6,0,0,1,15.44-1.019C205.892,1004.269,201.257,1004.258,195.656,
                    1003.886Zm295.059-7.66c-10.572.018-21.144-.039-31.716.026-11.1.067-22.184.666-33.275.959-6.353.168-12.714.4-19.066.344-16.118-.134-32.188,1.241-48.311,1.274-12.284.025-24.594.842-36.871,1.57-13.267.788-26.531.257-39.794.607-6.447.17-13-.827-19.369.249-8.092,1.365-16.18,1.158-24.292,1.21-1.078.007-2.156,0-3.235,0,5.388-1.931,10.981-1.492,16.485-1.986a267.12,267.12,0,0,1,30.04-1.318,176.788,176.788,0,0,0,26.348-1.427c10.753-1.364,21.6-1.943,32.432-2.277,15.047-.466,30.022-1.859,45.02-2.959,11.9-.873,23.824-1.051,35.744-1.394,10.564-.3,21.117-1,31.681-1.189,8.122-.142,16.253.23,24.379.42a6.851,6.851,0,0,1,2.344.57,127.734,127.734,0,0,0,16.366,5.133C493.988,996.1,492.352,996.223,490.715,996.226Zm23.334.5c5.3-2.079,10.617-1.291,15.982,0Zm21.857.642c6.989-.763,13.993-1.9,20.847,1.079ZM830.912,671.105c-.208,16.11-.37,32.23-.8,48.335-.34,12.571-.909,25.152-1.586,37.715-.547,10.162.021,20.319-.405,30.463-.733,17.449-1.339,34.909-3.312,52.284-.641,5.652-1.16,11.331-1.386,17.012-.35,8.8-1.057,17.581-1.61,26.362a67.08,67.08,0,0,1-9.2,30.4A46.707,46.707,0,0,1,789,933.861c-3.394,1.356-6.717,2.89-10.059,4.372-1.484.658-3.227,1.084-4.346,2.147-2.641,2.509-5.736,2.633-9.035,2.567-4.471-.089-8.945-.022-13.418-.022-16.115-.058-32.193-1.274-48.321-1.353-11.61-.057-23.255-.795-34.872-1.467-9.585-.555-19.157-1.347-28.74-1.939-4.459-.275-8.935-.267-13.4-.482-16.783-.81-33.576-.739-50.371-.88-9.733-.082-19.464-.808-29.188-1.381-7.731-.456-15.431.135-23.142.381-1.62.051-3.239.246-4.858.249-11.928.022-23.856-.038-35.783.025-12.861.068-25.7.8-38.533,1.543-5.4.313-10.837.328-16.247.345-17.611.058-35.218,1.008-52.826.478-7.581-.228-15.156-.385-22.738-.4q-23.763-.042-47.493,1.237c-5.137.273-10.293.183-15.433.407-12.592.55-25.19.529-37.784.392-5.543-.061-11.1-.759-16.633-.333a187.876,187.876,0,0,1-22.721.68,169.441,169.441,0,0,1-29.762-3.676,18.384,18.384,0,0,1-7.5-3.88c-4.787-3.834-8.812-8.419-13.04-12.8a20.144,20.144,0,0,1-3.648-5.837q-4.608-10.179-9.115-20.4c-1.576-3.592-.792-7.481-1.147-11.223a127.731,127.731,0,0,1-.127-21.893c.236-3.077-.351-6.207-.354-9.313-.007-9.07.472-18.132,1.263-27.157.7-8.017-.3-15.972-.3-23.957,0-3.387-.1-6.774.163-10.149.887-11.37.277-22.756.449-34.134a82.4,82.4,0,0,1,3.665-22.734c1.027-3.4.714-7.229.855-10.869.528-13.678.1-27.371.477-41.045.256-9.344.49-18.687.3-28.023-.281-14.068-.681-28.136-1.474-42.19-.45-7.97-.613-15.957-.9-23.936-.009-.271-.011-.543,0-.813,1.128-18.647.565-37.342,1.776-56,1.118-17.2,3.065-34.245,6.9-51.068,2.4-10.541,7.828-19.545,13.841-28.282,1.458-2.118,3.136-4.087,4.588-6.209a5.917,5.917,0,0,1,4.713-2.726c7.016-.572,14.025-1.118,21.075-1.2,16.926-.189,33.872-.1,50.767-.95,13.119-.661,26.272-.492,39.37-1.748,6.874-.659,13.8.065,20.711-.019,14.916-.181,29.783-1.41,44.692-1.578,5.285-.059,10.569-.221,15.854-.265,33.879-.28,67.752-.964,101.634-1.1,15.995-.066,32.007-.522,47.955.493,22.075,1.4,44.171.648,66.244,1.483,5.277.2,10.57.082,15.854-.018,8.813-.168,17.628.491,26.414.312,9.9-.2,19.764.265,29.645.288,7.047.016,14.106-.118,21.137.243,7.839.4,15.661,1.2,23.474,1.991,6.207.627,12.374,1.174,18.635.526,4.571-.473,9.2-.058,13.808-.27,10.141-.468,20.294-.684,30.443-.964,1.879-.052,3.784-.214,4.738,2.154.477,1.184,1.9,1.391,3.154,1.52,4.446.459,8.884,1.006,13.337,1.372,4.168.343,8.286,1.436,12.528.844a4.464,4.464,0,0,1,1.97.415,66.416,66.416,0,0,1,11.71,5.608,4.358,4.358,0,0,1,2.351,3.1,16.031,16.031,0,0,0,4.773,8.346,8.091,8.091,0,0,1,2.421,5.416c.592,11.078,1.952,22.1,1.734,33.242-.133,6.776-.348,13.542-.969,20.275-1.262,13.665-.785,27.331-.427,41,.23,8.794.6,17.584.862,26.378C831.4,616.371,831.265,643.745,830.912,671.105Zm122.17,113.527c-5.742,3.294-12.264,1.188-16.838-2.7a13.2,13.2,0,0,1-3.493-15.14,14.3,14.3,0,0,1,3.979-6.028c.931-.766,1.909-1.789,3-2,6.141-1.179,12.281-1.952,17.6,2.628a11.3,11.3,0,0,1,4.151,9.146C960.944,776.365,958.669,781.427,953.082,784.632Zm8.08,44.243A25.01,25.01,0,0,1,952.9,841.15a9.025,9.025,0,0,1-6.267,2.2c-9.084-.024-16.523-8.821-14.851-17.61.994-5.226,3.231-9.761,8.275-12.33,1.987-1.011,4-1.641,6.161-.394.807.466,1.686,1.046,2.652.447,2.4-1.487,4.225-.069,5.82,1.348a24.178,24.178,0,0,1,6.135,8.5A7.787,7.787,0,0,1,961.162,828.875Zm-2.189-111.846a10.062,10.062,0,0,1-5.1,7.857,24.3,24.3,0,0,1-9.914,3.255A13.962,13.962,0,0,1,929.077,714.9c-.155-3.461,1.532-5.97,4.215-7.825,3.6-2.491,7.508-4.257,11.538-3.993C953.873,702.431,960.092,708.8,958.973,717.029Zm4.556,204.094a22.413,22.413,0,0,1-11.957,15.509c-9.976,5.206-21.34-3.73-20.338-13.841a23.851,23.851,0,0,1,.946-6.211c2.542-7.981,9.8-12.187,18.067-10.516a28.089,28.089,0,0,1,6.906,2.271A11.451,11.451,0,0,1,963.529,921.123Zm42-381.035a103.867,103.867,0,0,1-27.1,46.893c-6.753,6.74-15,9.956-24.33,10.739-2.83.238-5.675.3-8.513.45-14.8-.341-29.132-2.821-42.285-9.943-16.275-8.811-26.085-22.334-28.82-40.793-2.405-16.221-1.036-32.013,6.868-46.568,10.931-20.13,27.893-31.978,50.835-34.629a153.766,153.766,0,0,1,
                    25.545-.816c16.6.857,29.858,8.225,39.212,21.976C1007.924,503.553,1010.664,521.316,1005.526,540.088Z" fill="#c63d49" data-v-b2c8125e="" data-v-a09c7bce=""></src></svg>  
      
    `;
  }
}

customElements.define('remixable-badge', RemixableBadge);