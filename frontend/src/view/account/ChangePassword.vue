<template>
    <div class="window-container">
        
        <section class="description">
            <div class="container">
                <div class="row">
                    
                    <div class="col-12 pl-0">Change Password</div>
                    
                </div>
                
            </div>
		</section><!--Enter your ID-->
        <section id="account-section">
			<div class="container">
				<div class="row">
					<form id="login-form" autocomplete="off" @submit.prevent="changePassword">
                        <label>Old password</label>
						<div class="form-group">
							<input pattern=".{6,}" type="password" v-model="oldPassword" id="input-old-password" class="form-control vi-input" placeholder="The password is more than 6 characters." name="oldPassword" required title="Enter your current password">
						</div>
                        <label>New password</label>
                        <div class="form-group">
							<input pattern=".{6,}" type="password" v-model="password" id="input-password" class="form-control vi-input" placeholder="The password is more than 6 characters." name="password" required title="Enter a new password">
                        </div>
                        <label>Confirm new password</label>
                        <div class="form-group">
							<input pattern=".{6,}" type="password" v-model="password_re" id="input-password-re" class="form-control vi-input" placeholder="The password is more than 6 characters." name="password_re" required title="Enter a new password">
                        </div>
						<button type="submit" id="signin-btn" class="btn btn-primary">Change Password</button>
					</form>
					
				</div>
			</div>
		</section><!-- ID/PW -->
    </div>
</template>

<script>
export default {
	data(){
		return {
			oldPassword : ''
            ,password : ''
            ,password_re : ''
		}
    }
    ,created:function(){
    }
	,methods:{
		changePassword(){
            if(this.password !== this.password_re) {
                return alert("Passwords do not match.");
            }
			httpCall('/changePassword',"PATCH",{"id":this.$session.get("id"),"oldPassword":this.oldPassword,"newPassword":this.password},(res)=>{
                alert("Change success.");
                history.back();
			});
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
</style>
