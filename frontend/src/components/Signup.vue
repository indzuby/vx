<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <form id="signup-form">
                <div class="form-group">
                    <label for="sign-input-email">Email address</label>
                    <input pattern="[\w.%+-]+@samsung\.com" type="email" id="sign-input-email" class="form-control" name="username" placeholder="singleID@samsung.com">
                     <small class="form-text text-muted">싱글 계정으로 가입해주세요</small>
                </div>
                
                
                <div class="form-group">
                    <input type="password" class="form-control" name="password" placeholder="Password">
                </div>
                <div align="right">Already signed up? 
                    <a href="index.html">Sign In</a>Now!
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
		}
	}
}
</script>