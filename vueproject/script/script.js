var data= {
    heros: [
        {id: 1, name: '嘤嘤怪', hp: 100},
        {id: 2, name: '奕剑', hp: 99},
        {id: 3, name: '悠', hp: 100},
        {id: 4, name: '两个奕剑', hp: 99},
    ],
    addhero:{id:0,name:'',hp:'0'}
};
var maxid=4;
var vue=new Vue({
    el:'#heropool',
    data:data,
    methods:{
        add:function () {
            maxid++;
            this.addhero.id=maxid;
            if(this.addhero.name.length==0)
                this.addhero.name="无名英雄"+this.addhero.id;
            this.heros.push(this.addhero)
            this.addhero={id:0,name:'',hp:'0'}
        },
        deletehero:function (id) {
            for(var i=0;i<this.heros.length;i++){
                if(this.heros[i].id==id) {
                    this.heros.splice(i, 1);
                    break;
                }
            }
        }
    }
})