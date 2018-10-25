<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <form id="signup-form"  autocomplete="off" @submit.prevent="signup">
                <div class="form-group">
                    <label for="sign-input-email">Email address</label>
                    <input pattern="[\w.%+-]+@samsung\.com" v-model="email" type="email" id="sign-input-email" class="form-control" name="username" placeholder="singleID@samsung.com">
                     <small class="form-text text-muted">싱글 계정으로 가입해주세요</small>
                </div>
                
                
                <div class="form-group">
                    <input type="password" class="form-control" v-model="password" name="password" placeholder="Password">
                </div>
                <div align="right">Already signed up? 
                    <a href="/">Sign In</a>Now!
                </div>
                
                <div class="text-right">
                    <button type="submit" class="btn btn-default">Sign Up</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
	name: 'Signup'
	,data(){
		return {
			email : ''
			,password : ''
		}
	}
	,methods:{
		signup(){
			httpCall('/signup',"POST",{"email":this.email,"password":this.password},(res)=>{
				console.log(res);
			});
		}
	}
}
</script>