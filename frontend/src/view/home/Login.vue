<template>
	<div>
		<header id="account-header">
			<div class="container">
				<div class="row">
					<div class="navbar-title">ONE SAMSUNG UX<br>DESIGN LIBRARY</div>
				</div>
			
				<div class="row">
				<div class="divider"></div>
				</div>
			</div>
		</header>
		
		
		<section class="description">
			<div class="container">
				<div class="row">
					
					<div class="col-12 pl-0">Enter your ID</div>
					<div class="col-12 pl-0">And PASSWORD</div>
					<div class="col-12 pl-0">to sign in</div>
					
				</div>
				
			</div>
		</section><!--Enter your ID-->
		
		<section id="account-section">
			<div class="container">
				<div class="row">
					<form id="login-form" autocomplete="off" @submit.prevent="login">
						<div class="form-group">
						<input pattern="[\w.%+-]+@samsung\.com" v-model="email" type="email" id="input-username" class="form-control vi-input" placeholder="ID" name="username" required title="id@samsung.com 형태로 입력해주세요">
						</div>
						
						<div class="form-group">
							<input pattern=".{6,}" type="password" v-model="password" id="input-password" class="form-control vi-input" placeholder="PASSWORD" name="password" required title="6자리 이상 암호로 입력해주세요">
						</div>
						
						<div class="form-group">  
							<div class="form-check">
							<span></span>
							<label class="form-check-label">
								<input id="checkbox-id" class="form-check-input" type="checkbox">
								<label for="checkbox-id"></label>
								Remember my ID
							</label>
							
							</div>
						
						</div>
						<button type="submit" id="signin-btn" class="btn btn-primary">SIGN IN</button>
					</form>
					
					<div id="signup-link" class="col-12 pl-0" @click="signup">
						SIGN UP
					</div>
					
					
				</div>
			</div>
			
		</section><!-- ID/PW -->
	</div>
</template>

<script>
export default {
	name: 'Login'
	,data(){
		return {
			email : ''
			,password : ''
		}
	}
	,methods:{
		login(){
			httpCall('/login',"POST",{"email":this.email,"password":this.password},(res)=>{
				location.href="/";
			});
		}
		,signup(){
			this.$router.push('Signup')
		}
	}
}
</script>
<style>

</style>
