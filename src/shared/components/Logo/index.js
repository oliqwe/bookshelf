import React from 'react'
import PropTypes from 'prop-types'

function Logo({ isDarkTheme }) {
  const color = isDarkTheme ? '#f0f0f0' : '#3b343d'

  return (
    <svg width="200.813" height="27.14" viewBox="0 0 200.813 27.14">
      <defs>
        <linearGradient
          id="a"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#8a8a4e" />
          <stop offset="0.778" stopColor="#717140" />
          <stop offset="1" stopColor="#454527" />
        </linearGradient>
      </defs>
      <g transform="translate(-2798.804 -465.175)">
        <path
          d="M21.1-17.589a5.107,5.107,0,0,1-.917,3.042,6.285,6.285,0,0,1-2.75,2.067,6.764,6.764,0,0,1,3.393,2.223,5.619,5.619,0,0,1,1.131,3.51,6.151,6.151,0,0,1-2.691,5.5Q16.575.546,11.466.546q-.741,0-1.579-.039T8.19.371Q7.332.273,6.474.1a15.892,15.892,0,0,1-1.6-.41A2.337,2.337,0,0,1,3-2.613V-21.684a1.532,1.532,0,0,1,.39-1.131,2.746,2.746,0,0,1,1.092-.624,14.865,14.865,0,0,1,3.081-.6q1.755-.176,3.666-.176A13.723,13.723,0,0,1,18.525-22.6,5.5,5.5,0,0,1,21.1-17.589ZM16.809-6.942A2.986,2.986,0,0,0,15.7-9.4a5.02,5.02,0,0,0-3.218-.9H7.917v6.513a10.029,10.029,0,0,0,1.774.273q1.034.078,2.048.078a7.026,7.026,0,0,0,3.724-.839A2.914,2.914,0,0,0,16.809-6.942ZM7.917-14h3.939A4.839,4.839,0,0,0,15-14.859a2.923,2.923,0,0,0,1.034-2.379q0-3.081-4.758-3.081-.975,0-1.852.078t-1.5.2ZM44.3-9.243a11.5,11.5,0,0,1-.682,4.076,8.887,8.887,0,0,1-1.931,3.1,8.327,8.327,0,0,1-3,1.97,10.793,10.793,0,0,1-3.939.683A10.793,10.793,0,0,1,30.81-.1a8.454,8.454,0,0,1-3-1.95,8.686,8.686,0,0,1-1.931-3.081,11.621,11.621,0,0,1-.683-4.115,11.5,11.5,0,0,1,.683-4.075,8.549,8.549,0,0,1,1.95-3.081,8.652,8.652,0,0,1,3.023-1.95,10.679,10.679,0,0,1,3.9-.683,10.679,10.679,0,0,1,3.9.683,8.518,8.518,0,0,1,3.022,1.969,8.744,8.744,0,0,1,1.95,3.1A11.384,11.384,0,0,1,44.3-9.243Zm-9.555-5.889a3.984,3.984,0,0,0-3.315,1.54,6.9,6.9,0,0,0-1.209,4.348,6.962,6.962,0,0,0,1.189,4.368,3.991,3.991,0,0,0,3.334,1.521,3.971,3.971,0,0,0,3.335-1.541,6.977,6.977,0,0,0,1.189-4.349,6.9,6.9,0,0,0-1.209-4.348A3.984,3.984,0,0,0,34.749-15.132ZM66.534-9.243a11.5,11.5,0,0,1-.682,4.076,8.887,8.887,0,0,1-1.931,3.1,8.327,8.327,0,0,1-3,1.97,10.793,10.793,0,0,1-3.939.683A10.793,10.793,0,0,1,53.04-.1a8.454,8.454,0,0,1-3-1.95,8.686,8.686,0,0,1-1.931-3.081,11.621,11.621,0,0,1-.682-4.115,11.5,11.5,0,0,1,.682-4.075,8.549,8.549,0,0,1,1.95-3.081,8.652,8.652,0,0,1,3.022-1.95,10.679,10.679,0,0,1,3.9-.683,10.679,10.679,0,0,1,3.9.683A8.518,8.518,0,0,1,63.9-16.38a8.744,8.744,0,0,1,1.95,3.1A11.384,11.384,0,0,1,66.534-9.243Zm-9.555-5.889a3.984,3.984,0,0,0-3.315,1.54,6.9,6.9,0,0,0-1.209,4.348,6.962,6.962,0,0,0,1.19,4.368,3.991,3.991,0,0,0,3.334,1.521,3.971,3.971,0,0,0,3.334-1.541A6.977,6.977,0,0,0,61.5-9.243a6.9,6.9,0,0,0-1.209-4.348A3.984,3.984,0,0,0,56.979-15.132ZM75.582-.039q-.351.078-.936.2A6.8,6.8,0,0,1,73.32.273a3.327,3.327,0,0,1-2.028-.507,2.13,2.13,0,0,1-.663-1.794V-25.35a5.069,5.069,0,0,1,.916-.215,8.489,8.489,0,0,1,1.345-.1,3.327,3.327,0,0,1,2.028.507,2.13,2.13,0,0,1,.663,1.794v12.09L83.148-18.8a3.91,3.91,0,0,1,2.379.663,2.009,2.009,0,0,1,.9,1.677,2.328,2.328,0,0,1-.565,1.56,15.636,15.636,0,0,1-1.775,1.677L79.872-9.555l7.449,6.981A3.819,3.819,0,0,1,86.5-.449a2.4,2.4,0,0,1-1.911.761,2.9,2.9,0,0,1-1.579-.429,8.552,8.552,0,0,1-1.658-1.521l-5.772-6.4Zm29.367-5.187a5.062,5.062,0,0,1-2.028,4.271A9.684,9.684,0,0,1,96.993.585,16.544,16.544,0,0,1,94.088.351a9.107,9.107,0,0,1-2.262-.683,4.154,4.154,0,0,1-1.482-1.092,2.2,2.2,0,0,1-.526-1.424,2.432,2.432,0,0,1,.331-1.287,2.754,2.754,0,0,1,.878-.9,13.747,13.747,0,0,0,2.515,1.248,9.168,9.168,0,0,0,3.3.546,4.511,4.511,0,0,0,2.418-.526,1.65,1.65,0,0,0,.819-1.463q0-1.6-2.34-2.106L95.55-7.839a9.026,9.026,0,0,1-4.271-1.989,4.685,4.685,0,0,1-1.384-3.549,4.974,4.974,0,0,1,2.028-4.115,9.072,9.072,0,0,1,5.694-1.58,14.638,14.638,0,0,1,2.593.215,8.428,8.428,0,0,1,2.067.624,4.005,4.005,0,0,1,1.365.975,1.941,1.941,0,0,1,.487,1.307,2.364,2.364,0,0,1-.312,1.228,2.75,2.75,0,0,1-.741.839,5.394,5.394,0,0,0-.916-.468,11.617,11.617,0,0,0-1.248-.429,14.72,14.72,0,0,0-1.443-.332,8.487,8.487,0,0,0-1.5-.137,4.845,4.845,0,0,0-2.379.488,1.521,1.521,0,0,0-.858,1.384,1.39,1.39,0,0,0,.488,1.092,3.959,3.959,0,0,0,1.7.7l1.911.468a9.7,9.7,0,0,1,4.68,2.165A5,5,0,0,1,104.949-5.226Zm8.97,5.187q-.351.078-.936.2a6.8,6.8,0,0,1-1.326.117,3.327,3.327,0,0,1-2.028-.507,2.13,2.13,0,0,1-.663-1.794V-25.35a5.069,5.069,0,0,1,.916-.215,8.489,8.489,0,0,1,1.345-.1,3.327,3.327,0,0,1,2.028.507,2.13,2.13,0,0,1,.663,1.794v5.382a11.139,11.139,0,0,1,1.97-.741,9.155,9.155,0,0,1,2.476-.312A8.312,8.312,0,0,1,124.02-17.2a6.95,6.95,0,0,1,2.106,5.538V-.039q-.312.078-.916.2A6.878,6.878,0,0,1,123.9.273a3.406,3.406,0,0,1-2.067-.507,2.13,2.13,0,0,1-.663-1.794v-9.4a3.553,3.553,0,0,0-1.014-2.828,3.908,3.908,0,0,0-2.652-.877,5.583,5.583,0,0,0-1.95.331,8.712,8.712,0,0,0-1.638.8ZM135.1-7.02a4.627,4.627,0,0,0,2.028,2.886,6.965,6.965,0,0,0,3.666.9,9.042,9.042,0,0,0,3.023-.487,11.087,11.087,0,0,0,2.242-1.034,2.573,2.573,0,0,1,.9.858,2.125,2.125,0,0,1,.351,1.17,2.048,2.048,0,0,1-.527,1.384,4.291,4.291,0,0,1-1.443,1.034,9.043,9.043,0,0,1-2.165.663,14.608,14.608,0,0,1-2.691.234,13.327,13.327,0,0,1-4.193-.624,8.557,8.557,0,0,1-3.237-1.892,8.785,8.785,0,0,1-2.106-3.14,11.552,11.552,0,0,1-.76-4.368,10.984,10.984,0,0,1,.741-4.212,8.644,8.644,0,0,1,2.008-3,8.062,8.062,0,0,1,2.945-1.794,10.7,10.7,0,0,1,3.549-.585,9.851,9.851,0,0,1,3.51.6,8.049,8.049,0,0,1,2.73,1.677,7.658,7.658,0,0,1,1.775,2.574,8.179,8.179,0,0,1,.643,3.257,2.178,2.178,0,0,1-.566,1.638,2.827,2.827,0,0,1-1.579.7Zm4.329-8.307a4.377,4.377,0,0,0-3.2,1.267,5.366,5.366,0,0,0-1.443,3.608l8.658-1.287a4.344,4.344,0,0,0-1.131-2.515A3.7,3.7,0,0,0,139.425-15.327ZM157.092-.039q-.312.078-.917.2a6.878,6.878,0,0,1-1.306.117,3.314,3.314,0,0,1-2.048-.507,2.164,2.164,0,0,1-.644-1.794V-25.35a5.069,5.069,0,0,1,.917-.215,8.217,8.217,0,0,1,1.307-.1,3.314,3.314,0,0,1,2.048.507,2.164,2.164,0,0,1,.643,1.794Zm9.984-17.2h7.059a3.577,3.577,0,0,1,.351.8,3.5,3.5,0,0,1,.156,1.073,2.027,2.027,0,0,1-.468,1.482,1.687,1.687,0,0,1-1.248.468H167.31V-.039q-.351.078-.936.2a6.8,6.8,0,0,1-1.326.117,3.327,3.327,0,0,1-2.028-.507,2.13,2.13,0,0,1-.663-1.794V-19.266a7.9,7.9,0,0,1,.585-3.2,5.768,5.768,0,0,1,1.638-2.184,6.865,6.865,0,0,1,2.5-1.268,11.541,11.541,0,0,1,3.159-.409q5.187,0,5.187,2.73a2.374,2.374,0,0,1-.254,1.112,2.754,2.754,0,0,1-.6.8,9.21,9.21,0,0,0-1.658-.507,9.258,9.258,0,0,0-1.93-.195,4.6,4.6,0,0,0-2.964.78,3.123,3.123,0,0,0-.936,2.535Z"
          transform="translate(2824.196 491.5)"
          fill={color}
        />
        <g transform="translate(2798.804 467.478)">
          <path
            d="M8.586,2.656H22.033a.864.864,0,0,0,.9-.828.864.864,0,0,0-.9-.828H8.586A3.457,3.457,0,0,0,5,4.312V21.7a4.326,4.326,0,0,0,4.482,4.139H20.24A4.326,4.326,0,0,0,24.722,21.7V10.107A4.326,4.326,0,0,0,20.24,5.967H8.586A1.751,1.751,0,0,1,6.793,4.312,1.728,1.728,0,0,1,8.586,2.656Zm0,4.967h.9v6.623a.821.821,0,0,0,.474.73.96.96,0,0,0,.92-.041l2.192-1.351,2.192,1.349a.971.971,0,0,0,.921.041.821.821,0,0,0,.473-.729V7.623H20.24a2.593,2.593,0,0,1,2.689,2.484V21.7a2.593,2.593,0,0,1-2.689,2.484H9.482A2.593,2.593,0,0,1,6.793,21.7V7.18a3.8,3.8,0,0,0,1.793.443Z"
            transform="translate(-5 -1)"
            fill="url(#a)"
          />
        </g>
      </g>
    </svg>
  )
}

Logo.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
}

export default Logo
