<template>
    <div class="window-container">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">email</th>
                    <th scope="col" style="width:20%">비밀번호 재발급</th>
                    <th scope="col" style="width:20%">관리자 권한 변경</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user,i) in items" :key="user._id">
                    <th scope="row">{{i+1}}</th>
                    <td>{{user.email}}</td>
                    <td><span class="new" @click="newPassword(user)">new</span></td> 
                    <td>
                        <span class="admin" v-if="user.level>1" @click="changePermission(user)">admin</span>
                        <span class="normal" v-else @click="changePermission(user)">normal</span>
                    </td> 
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
  data () {
    return {
        items: []
    }
  }
  ,created:function(){
      this.getUsers();
  }
  ,methods:{
      getUsers(){
          var self = this;
          httpCall("/users","GET",null,function(res){
              self.items=res.data;
          })
      }
      ,newPassword(user){
          if(confirm(user.email+"의 새로운 비밀번호를 발급하시겠습니까?")){
              httpCall("/password/"+user._id,"GET",null,function(res){
                  prompt("새로운비밀번호는 아래와 같습니다.",res.data);
              });
          }
      }
      ,changePermission(user){
          var msg = "("+user.email+") 일반 사용자를 관리자로 권한 변경하시겠습니까?";
          if(user.level>1) {
              msg = "("+user.email+") 관리자를 일반 사용자로 권한을 변경하시겠습니까?";
          }
           if(confirm(msg)){
              httpCall("/changePermission","PATCH",{"id":user._id},function(res){
                  alert(res.msg);
                  user.level = 100 - user.level;
              });
          }
      }
  }
}
</script>

<style>
    .window-container{
        height: 100%;
        padding-top : 200px;
        padding-bottom : 100px;
    }
    .table {
        width: 100%;
    }
    tr,thead,tbody{
        min-width: 100%;
    }
    .new, .admin, .normal{
        display: inline-block;
        background: #dc3545;
        padding : 4px;
        padding-right : 10px;
        padding-left : 10px;
        border-radius: 8px;
        color : white;
        cursor: pointer;
    }
    .admin {        
        background: gray;
    }
    .normal{
        background: white;
        color:black;
        border:  1px solid black;
    }
</style>
