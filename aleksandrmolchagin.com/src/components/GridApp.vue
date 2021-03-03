<template>
    <div class="elements selecto-area" id="selecto1">
        <div class="container">
            <vue-selecto
                dragContainer=".elements"
                v-bind:selectableTargets='[".selecto-area .cube"]'
                v-bind:hitRate='100'
                v-bind:selectByClick='true'
                v-bind:selectFromInside='true'
                v-bind:toggleContinueSelect='["shift"]'
                v-bind:ratio='0'
                @select="onSelect"
                ></vue-selecto>

                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
          
            <div class="empty elements"></div>
        </div>
    </div>
</template>
<script>
import { VueSelecto } from "vue-selecto";

export default {
    name: 'GridApp',
    components: {
        VueSelecto,
    },
    data() {
        const cubes = [];
        for (let i = 0; i < 60; ++i) {
            cubes.push(i);
        }
        return {
            cubes,
        };
    },
    methods: {
        onSelect(e) {
            e.added.forEach(el => {
                el.classList.add("selected");
            });
            e.removed.forEach(el => {
                el.classList.remove("selected");
            });
        }
    },
};
</script>
<style>
    html, body, #root {
        position: relative;
        margin: 0;
        padding: 0;
        height: 100%;
        color: #333;
        background: #fdfdfd;
    }
    
    .app {
        position: relative;
        min-height: 100%;
        padding: 10px 20px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
    }
    
    .container {
        max-width: 800px;
        ;
    }
    
    body {
        background: #fff;
    }
    
    .logo {
        position: relative;
        width: 150px;
        height: 150px;
        margin: 0px auto;
        font-size: 0;
        text-align: left;
    }
    
    .logo.logos {
        width: 320px;
        text-align: center;
    }
    
    .logos .selecto {
        padding: 16px;
    }
    
    .logo img {
        position: relative;
        height: 100%;
        box-sizing: border-box;
    }
    
    .cube {
        display: inline-block;
        border-radius: 0.66rem;
        width: 4.5rem;
        height:  4.5rem;
        margin: 4px;
        background: #eee;
        --color: rgb(100, 68, 177);
    }
    
    h1, .description {
        text-align: center;
    }
    
    .button {
        border: 1px solid #333;
        color: #333;
        background: transparent;
        appearance: none;
        -webkit-appearance: none;
        box-sizing: border-box;
        cursor: pointer;
        width: 120px;
        height: 42px;
        font-size: 14px;
        letter-spacing: 1px;
        transition: all ease 0.2s;
        margin: 0px 5px;
    }
    
    .button:hover {
        background: #333;
        color: white;
    }
    
    .elements {
        margin-top: 40px;
        border: 2px solid #eee;
    }
    
    .selecto-area {
        position: relative;
        min-height: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: right;
        box-sizing: border-box;
    }
    
    #selecto1 .cube {
        transition: all ease 0.2s;
    }
    
    .moveable #selecto1 .cube {
        
        transition: none;
    }
    
    .selecto-area .selected {
        color: #fff;
        background: var(--color);
    }
    
    .scroll {
        overflow: auto;
        padding-top: 10px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    
    .infinite-viewer, .scroll {
        width: 100%;
        height: 300px;
        box-sizing: border-box;
    }
    
    .infinite-viewer .viewport {
        padding-top: 10px;
    }
    
    .empty.elements {
        border: none;
    }
</style>