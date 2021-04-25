<template>
    <div class="elements selecto-area" id="selecto1" :style="cssVars">
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

export default {
    name: 'GridApp',
    components: {
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
<style scoped>

    .selecto-area {
        position: fixed;
        min-height: 100%;
        min-width: 100%;
        max-height: 100%;
        max-width: 100%;
        text-align: left;
        align-items: center;
        justify-content: right;
        margin: 1em;
    }
  
    .cube {
        display: inline-block;
        border-radius: 0.66rem;
        width: 6vh;
        height:  6vh;
        margin: 4px;
        background: #bbc1c3;
        --color: rgb(100, 68, 177);
        box-shadow: 0px 0px 1px black;

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