<script>
    export default {
        // eslint-disable-next-line no-unused-vars
        render(h,_cxt){
            console.log(1);
            return h(require(`@/assets/post/${this.app}.md`),{
                props:{
                    prop:this.props
                }
            })
        },
        props:{
            app:String,
            prop:Object
        }
    }
</script>