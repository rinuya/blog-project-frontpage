module.exports ={
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/daisyui/dist/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {light: {
        ...require("daisyui/src/colors/themes")["[data-theme=light]"],
        
        "primary": "#059669",
                
        "secondary": "#16a34a",
                
        "accent": "#ea580c",
                
        "neutral": "#4b5563",
                
        "base-100": "#FFFFFF",
                
        "info": "#ccfbf1",
                
        "success": "#36D399",
                
        "warning": "#f87171",
                
        "error": "#b91c1c",  
      },
    }, 
    {dark: {
      ...require("daisyui/src/colors/themes")["[data-theme=dracula]"],
      
      "primary": "#059669",
              
      "secondary": "#16a34a",
              
      "accent": "#fcd34d",
              
      "info": "#ccfbf1",
              
      "success": "#36D399",
              
      "warning": "#f87171",
              
      "error": "#b91c1c",  
    },
  }],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  
}
