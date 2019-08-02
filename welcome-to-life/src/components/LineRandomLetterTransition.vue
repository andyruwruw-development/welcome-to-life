<template>
  <div class="line-random-letter-transition">
      <p>{{string}}</p>
  </div>
</template>

<script>
export default {
    name: 'line-random-letter-transition',
    props: {
        text: String
    },
    data() {
        return {
            list: [],
            listUpdates: [],
            letters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-={[}]|;:<>?",
            string: "",
        }
    },
    methods: {
        createList() {
            for (var i = 0; i < this.text.length; i++)
            {
                this.list.push({char: this.text[i], state: 0}); 
            }
        },
        checkFinish() {
            for (var i = 0; i < this.list.length; i++)
            {
                if (this.list[i].state != 2)
                {
                    return;
                }
            }
            clearInterval(this.interval); 
        },
        generate() {
            let random = 0;
            for (var i = 0; i < 2; i++)
            {
                this.progressChar()
            }
            this.checkFinish();
            this.createLine();
        },
        progressChar() {
            while (true) {
                let random = Math.floor(Math.random() * this.list.length);
                if (this.list[random].state != 2)
                {
                    this.list[random].state += 1
                    break;
                }
                else {
                    continue;
                }
            }
        },
        createLine() {
            let string = "";
            for (var i = 0; i < this.list.length; i++)
            {
                if (this.list[i].state == 0)
                {
                    string += " ";
                }
                else if (this.list[i].state == 1)
                {
                    string += this.letters[Math.floor(Math.random() * this.letters.length)];
                }
                else if (this.list[i].state == 2)
                {
                    string += this.list[i].char;
                }
            }
            console.log(string);
            this.string = string;
        },
    },
    computed: {

    },
    created() {
        this.createList();
        this.interval = setInterval(this.generate, 20);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
    color: rgb(211, 211, 211);
    text-align: left;
    margin-left: 10px;
    white-space: pre;
}
</style>
