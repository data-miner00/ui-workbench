<script setup lang="ts"></script>

<template>
  <div class="flex gap-2">
    <span title="RUN / PAUSE"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
      >
        <path
          fill="currentColor"
          d="M10 0C4.475 0 0 4.475 0 10s4.475 10 10 10 10-4.475 10-10S15.525 0 10 0ZM8 14.5v-9l6 4.5-6 4.5Z"
        ></path>
      </svg>
    </span>
    <span title="REWIND"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
      >
        <path
          fill="currentColor"
          d="M10 0C4.486 0 0 4.485 0 10s4.486 10 10 10c5.515 0 10-4.485 10-10S15.515 0 10 0Zm5 14-6-4v4l-6-4 6-4v4l6-4v8Z"
        ></path>
      </svg>
    </span>
    <span title="CLEAR">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10Zm13.529 4.472L10 10.942l-3.529 3.53-.942-.943L9.057 10 5.53 6.471l.942-.942 3.53 3.528 3.528-3.528.943.942-3.53 3.53 3.53 3.528-.943.943Z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </span>
    <span title="ZOOM IN"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
      >
        <path
          fill="currentColor"
          d="M10 0C4.476 0 0 4.476 0 10s4.476 10 10 10 10-4.476 10-10S15.524 0 10 0Zm6.154 10.433h-5.77v5.72h-.817v-5.72h-5.72v-.818h5.72V3.846h.818v5.77h5.769v.817Z"
        ></path>
      </svg>
    </span>
    <span title="ZOOM OUT">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
      >
        <path
          fill="currentColor"
          d="M10 0C4.476 0 0 4.476 0 10s4.476 10 10 10 10-4.476 10-10S15.524 0 10 0Zm6.154 10.433H3.846v-.818h12.308v.818Z"
        ></path>
      </svg>
    </span>
    <span title="RANDOMIZE PATTERN">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
      >
        <path
          fill="currentColor"
          d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0ZM7.95 11.6c-.9.9-2.15 1.4-3.4 1.4-.3 0-.5-.2-.5-.5s.2-.5.5-.5c1 0 2-.4 2.7-1.1.2-.2.5-.2.7 0 .2.2.2.5 0 .7Zm7.95 1.3-1.4 1.4c-.1.1-.25.15-.35.15-.15 0-.25-.05-.35-.15-.2-.2-.2-.5 0-.7l.55-.55H13.2c-1.3 0-2.5-.5-3.4-1.4l-2.5-2.5c-.7-.7-1.7-1.1-2.7-1.1-.3 0-.5-.2-.5-.5s.2-.5.5-.5c1.25 0 2.5.5 3.4 1.4l2.5 2.5c.75.7 1.7 1.1 2.7 1.1h1.15l-.55-.55c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0l1.4 1.4c.2.15.2.5 0 .7Zm0-5.05-1.4 1.4c-.1.1-.25.15-.35.15-.15 0-.25-.05-.35-.15-.2-.2-.2-.5 0-.7l.55-.55H13.2c-1 0-2 .4-2.7 1.1-.1.1-.25.15-.35.15-.15 0-.25-.05-.35-.15-.2-.2-.2-.5 0-.7.9-.9 2.1-1.4 3.4-1.4h1.15l-.55-.55c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0l1.4 1.4c.2.15.2.5 0 .7Z"
        ></path>
      </svg>
    </span>
    <span title="INSTRUCTIONS">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
      >
        <path
          fill="currentColor"
          d="M10 0C4.475 0 0 4.475 0 10s4.475 10 10 10 10-4.475 10-10S15.525 0 10 0Zm1 15H9V9h2v6Zm0-8H9V5h2v2Z"
        ></path>
      </svg>
    </span>
  </div>
</template>
