<template>
  <div class="line-bit-transition">
      <p>{{string}}</p>
  </div>
</template>

<script>
export default {
    name: 'line-bit-transition',
    props: {
        text: String
    },
    data() {
        return {
            interval: null,

            revealed: 0,
            converted: 0,
            translated: 0,
            letters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-={[}]|;:<>?",
            string: "",
        }
    },
    methods: {
        generate() {
            this.revealed += 1;
            if (this.revealed > 2) {
                this.converted += 1;
            }
            if (this.revealed > 2)
                this.translated += 1;
            if (this.translated >= this.text.length)
                clearInterval(this.interval);  
            this.createLine();
        },
        createLine() {
            var string = ""
            for (var i = 0; i < this.text.length; i++)
            {
                if (i < this.translated)
                    string += this.text[i];
                else if (i < this.converted)
                {
                    string += this.letters[Math.floor(Math.random() * this.letters.length)];
                }
                else if (i < this.revealed)
                    string += Math.round(Math.random());
                else
                    string += " ";
            }
            this.string = string;
        },
    },
    computed: {

    },
    created() {
        this.interval = setInterval(this.generate, 15);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
    color: rgb(211, 211, 211);
    text-align: left;
    margin-left: 10px;
}
</style>
