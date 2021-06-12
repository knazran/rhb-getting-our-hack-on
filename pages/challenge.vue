<template>
  <main class="flex flex-col h-screen">
    <!-- header -->
    <div class="flex flex-row items-center justify-between p-2 bg-tgray-900">
      <h1 class="px-2 text-lg font-light text-gray-300">{{ title }}</h1>
      <Timer
        :time="3 * 60 * 1000"
        class="inline-flex text-tgray-400"
        v-slot="{ minutes, seconds }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 mr-2 -mb-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p class="flex items-baseline text-lg font-semibold">
          {{ minutes }}<span class="text-sm">m</span>
        </p>
        <p class="flex items-baseline ml-1.5 text-lg font-semibold">
          {{ seconds }}<span class="text-sm">m</span>
        </p>
      </Timer>
      <button
        @click="submitCode()"
        class="inline-flex items-center px-2 py-1 text-xs text-gray-100 border rounded-md  border-tgray-600 hover:bg-tgray-800 focus:bg-tgray-800 focus:outline-none"
      >
        <svg
          v-if="submitStatus === 'stop'"
          svg
          class="w-5 h-5 mr-1 -ml-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          v-else-if="submitStatus === 'running'"
          class="w-4 h-4 mr-1 -ml-1 text-white animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Submit Task
      </button>
    </div>

    <!-- content -->
    <div class="flex flex-row h-full">
      <!-- task -->
      <div
        class="w-1/2 h-full text-white border-t border-r border-gray-600  bg-tgray-900"
      >
        <div class="border-b border-gray-600 flexborder-b">
          <p class="px-4 py-2 text-xs font-light text-gray-100">Task</p>
        </div>
        <p class="ml-4">////////////////////////////////////////</p>
        <div class="w-1/2 ml-4">
          <pre>{{ questionTitle }}</pre>
        </div>

        <p class="ml-4">////////////////////////////////////////</p>
        <div
          class="px-4 py-3 font-mono text-tgray-400"
          v-html="compiledMarkdown"
        ></div>
      </div>

      <!-- code & output -->
      <div class="flex flex-col w-1/2 h-full">
        <!-- code header -->
        <div class="border-t border-b border-gray-600 bg-tgray-800">
          <div
            class="inline-flex items-center px-3 py-2 text-xs font-light text-gray-100 border-r border-gray-600 "
          >
            <svg
              class="w-3 h-3 mr-1 -ml-1 text-tgray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                clip-rule="evenodd"
              />
            </svg>
            index.js
            <svg
              class="w-3 h-3 ml-1 -mr-1 cursor-pointer text-tgray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>

        <!-- code -->
        <PrismEditor
          class="my-editor h-1/2"
          v-model="code"
          :highlight="highlighter"
          line-numbers
        ></PrismEditor>

        <!-- output -->
        <div class="text-xs text-gray-100 bg-tgray-800 h-1/2">
          <!-- output header -->
          <div
            class="flex flex-row items-center justify-between px-3 py-1 text-xs font-light text-gray-100 border-t border-gray-600  bg-tgray-900"
          >
            <p>Test Output</p>
            <button
              @click="testCode()"
              class="inline-flex items-center px-2 py-1 border border-gray-600 rounded-md  hover:bg-tgray-800 focus:bg-tgray-800 focus:outline-none"
            >
              <svg
                v-if="testStatus === 'running'"
                class="w-5 h-5 mr-1 -ml-1 text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <svg
                v-else
                svg
                class="w-5 h-5 mr-1 -ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clip-rule="evenodd"
                />
              </svg>

              Run Tests
            </button>
          </div>

          <!-- output loading skeleton -->
          <div class="px-8 py-4 space-y-4" v-show="testStatus === 'running'">
            <div class="flex flex-col animate-pulse">
              <div class="flex items-center space-x-3">
                <div class="w-5 h-5 bg-gray-600 rounded-full"></div>
                <div class="w-48 h-4 bg-gray-600 rounded"></div>
              </div>

              <div class="h-3 mt-4 mb-4 bg-gray-600 rounded w-28"></div>

              <div class="flex flex-row space-x-2">
                <div class="w-1 bg-gray-600 rounded h-34"></div>
                <div class="text-xs">
                  <div class="w-8 h-3 mb-1 bg-gray-600 rounded"></div>
                  <div class="w-10 h-3 mb-1 bg-gray-600 rounded"></div>
                  <div class="h-3 mb-1 bg-gray-600 rounded w-52"></div>

                  <div class="h-3 mt-4 mb-1 bg-gray-600 rounded w-52"></div>
                  <div class="h-3 mb-1 bg-gray-600 rounded w-52"></div>
                  <div class="w-32 h-3 mb-1 bg-gray-600 rounded"></div>
                  <div class="w-24 h-3 mb-1 bg-gray-600 rounded"></div>
                  <div class="w-32 h-3 mb-1 bg-gray-600 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- output content -->
          <div class="px-8 py-4 space-y-4" v-show="testStatus === 'stop'">
            <p
              class="flex space-x-2 font-mono text-sm font-bold"
              :class="
                testResult === 'error' ? 'text-red-600' : 'text-green-600'
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  v-if="testResult === 'error'"
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
                <path
                  v-else
                  fill-rule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>

              <span
                >{{
                  testResult === "error"
                    ? "Error detected!"
                    : "Compilation successful!"
                }}
                <p
                  class="text-xs"
                  :class="
                    testResult === 'error' ? 'text-red-600' : 'text-green-600'
                  "
                >
                  {{ output }}
                </p>
              </span>
            </p>

            <div class="flex flex-row space-x-2 font-mono">
              <div
                class="border-r-4 h-38"
                :class="
                  testResult === 'error' ? 'border-red-600' : 'border-green-600'
                "
              ></div>
              <div class="text-xs">
                <p class="mb-1 font-bold text-tgray-300">Test</p>
                <p class="font-light text-tgray-500">
                  {{ testResult === "error" ? "FAILED!" : "PASSED!" }}
                </p>
                <div class="flex flex-row mb-4">
                  <span class="text-tgray-500">
                    {{ testResult === "error" ? "X" : "√" }} matches
                    {{ expectedOutput }} ({{
                      Math.floor(Math.random() * 13)
                    }}ms)</span
                  >
                </div>

                <div class="text-xs text-tgray-500">
                  <div class="flex flex-row space-x-2">
                    <div>
                      <p>Test Suites:</p>
                      <p>Tests:</p>
                      <p>Snapshots:</p>
                      <p>Time:</p>
                    </div>
                    <div>
                      <p>
                        {{ testResult === "error" ? "0" : "1" }} passed, 1 total
                      </p>
                      <p>
                        {{ testResult === "error" ? "0" : "1" }} passed, 1 total
                      </p>
                      <p>{{ testResult === "error" ? "0" : "1" }} total</p>
                      <p>{{ Math.floor(Math.random() * 13) }}ms</p>
                    </div>
                  </div>
                  <p>Ran all test suites.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Timer from "../components/Timer.vue";

// import Prism Editor
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles

// import markdown parser
import marked from "marked";

import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";

// import { art } from "ascii-art";
import figlet from "figlet";
import standard from "figlet/importable-fonts/Standard.js";
import modular from "figlet/importable-fonts/Modular.js";
import ogre from "figlet/importable-fonts/Ogre.js";
import slant from "figlet/importable-fonts/Slant.js";
import ansiregular from "figlet/importable-fonts/ANSI Regular.js";
import ansishadow from "figlet/importable-fonts/ANSI Shadow.js";
import small from "figlet/importable-fonts/Small.js";

// import VueSimpleMarkdown from "vue-simple-markdown/dist/vue-simple-markdown";
// // You need a specific loader for CSS files like https://github.com/webpack/css-loader
// import "vue-simple-markdown/dist/vue-simple-markdown.css";
// // Vue.use(VueSimpleMarkdown)
// import MarkDownData from "../data/arrays.md";

export default {
  name: "ChallengePage",
  components: {
    Timer,
    // VueSimpleMarkdown,
    PrismEditor,
  },
  data() {
    let code = prettier.format(this.$route.query.code, {
      parser: "babel",
      plugins: [parserBabel],
    });

    return {
      output: "",
      testStatus: "start",
      submitStatus: "stop",
      testResult: "success",
      questionTitle: "",

      // "props"
      title: this.$route.query.title,
      task: this.$route.query.task,
      code: code,
      expectedOutput: this.$route.query.expectedoutput,
    };
  },
  computed: {
    compiledMarkdown() {
      return this.task.replaceAll("\n", "<br>"); //marked(this.task)
    },
    // questionTitle() {
    //   return art.style(this.title, true);
    // },
  },
  methods: {
    testCode() {
      this.testStatus = "running";

      let min = 1000;
      let max = 2500;
      let timeout = Math.floor(Math.random() * (max - min + 1)) + min;

      setTimeout(() => {
        this.output = ""; // clear the output

        try {
          eval(this.code);

          if (this.expectedOutput === this.output) {
            this.testResult = "success";
          } else {
            // if output does not match expected output
            this.output = `Output "${this.output}" does not match expected value`;
            this.testResult = "error";
          }
        } catch (e) {
          this.output = e.message;
          this.testResult = "error";
        }
        this.testStatus = "stop";
      }, timeout);
    },
    submitCode() {
      this.submitStatus = "running";

      let min = 1000;
      let max = 2500;
      let timeout = Math.floor(Math.random() * (max - min + 1)) + min;

      setTimeout(() => {
        this.submitStatus = "stop";
        setTimeout(() => {
          this.$router.push({ name: "candidate-profile" });
        }, 500);
      }, timeout);
    },
    highlighter(code) {
      return highlight(code, languages.js); // languages.<insert language> to return html with markup
    },
  },
  mounted() {
    // Override console.log to append output to HTML
    // https://stackoverflow.com/questions/20256760/javascript-console-log-to-html
    let that = this;

    let old = console.log;
    console.log = function (message) {
      that.output = message;
    };

    let fonts = [
      {
        name: "Standard",
        function: standard,
      },
      {
        name: "Modular",
        function: modular,
      },
      {
        name: "Ogre",
        function: ogre,
      },
      {
        name: "Slant",
        function: slant,
      },
      {
        name: "ANSI Regular",
        function: ansiregular,
      },
      {
        name: "ANSI Shadow",
        function: ansishadow,
      },
      {
        name: "Small",
        function: small,
      },
    ];

    let randomFont =
      fonts[Math.floor(Math.random() * (fonts.length - 1 - 0 + 1)) + 0];

    if (this.title.length > 10) {
      randomFont = {
        name: "Small",
        function: small,
      };
    }

    figlet.parseFont(randomFont.name, randomFont.function);

    figlet(
      this.title,
      {
        font: randomFont.name,
      },
      function (err, data) {
        if (err) {
          console.error(err);
          return;
        }
        that.questionTitle = data;
      }
    );
    // figlet(
    //   this.title,

    //   (err, data) => {
    //     if (err) {
    //       console.error(err);
    //     }

    //     this.questionTitle = data;
    //   }
    // );

    // const figlefyAPI = "http://figlefy.com/figlefy/";

    // fetch(figlefyAPI + encodeURIComponent(this.title))
    //   .then((res) => res.text())
    //   .then((figlefied) => {
    //     this.questionTitle = figlefied;
    //   });
  },
};
</script>

<style>
/* required class */
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  background: rgba(38, 38, 38, 1); /**#2d2d2d;**/
  color: #ccc;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;

  height: 50%;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
</style>
