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
					
					<div class="col-12 pl-0">Create a New</div>
					<div class="col-12 pl-0">Account</div>
					
				</div>
				
			</div>
		</section><!--Enter your ID-->
		<section id="account-section">
			<div class="container">
				<div class="row">
					<form id="login-form" autocomplete="off" @submit.prevent="signup">
						<div class="form-group">
						<input pattern="[\w.%+-]+@samsung\.com" v-model="email" type="email" id="input-username" class="form-control vi-input" placeholder="ID" name="username" required title="id@samsung.com">
						</div>
						<div class="form-group">
							<input pattern=".{6,}" type="password" v-model="password" id="input-password" class="form-control vi-input" placeholder="The password is more than 6 characters." name="password" required title="The password is more than 6 characters.">
						</div>

                        <div class="form-group">
							<input pattern=".{6,}" type="password" v-model="password_re" id="input-password-re" class="form-control vi-input" placeholder="The password is more than 6 characters." name="password_re" required title="The password is more than 6 characters.">
                        </div>
                        <div align="right">Already signed up? 
                            <a href="/login">Sign In</a> here
                        </div>
						
						<button type="submit" id="signin-btn" class="btn btn-primary">SIGN UP</button>
					</form>
					
				</div>
			</div>
			
		</section><!-- ID/PW -->
	</div>
</template>

<script>
export default {
	name: 'Signup'
	,data(){
		return {
			email : ''
            ,password : ''
            ,password_re : ''
		}
	}
	,methods:{
		signup(){
            if(this.password !== this.password_re) {
                return alert("Passwords do not match.");
            }
			httpCall('/signup',"POST",{"email":this.email,"password":this.password},(res)=>{
				if(confirm("Sign up success. Pleas login.")){
                    location.href="/login";
                }
			});
		}
	}
}
</script>