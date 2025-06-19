const { expect, browser, $ } = require('@wdio/globals')

describe('OneSkyApp - Sign Up Flow', () => {
  it('should sign up and handle success alert', async () => {
    await $("//*[@class = 'android.widget.TextView' and (@text = 'Next' or . = 'Next')]").click()
    await $("//*[@class = 'android.widget.TextView' and (@text = 'Next' or . = 'Next')]").click()
    await $("//*[@class = 'android.widget.TextView' and (@text = 'I want to make an impact' or . = 'I want to make an impact')]").click()
    await $('//android.widget.Button[@content-desc="Sign up"]').click();
       // Fill in "username"
    $(`//*[@class='android.widget.EditText' and (@text='username' or .='username')]`).setValue('baba');
    // Fill in "email"
    await $(`//*[@class='android.widget.EditText' and (@text='johndoe@email.com' or .='johndoe@email.com')]`).setValue('baba@aol.com');
       // Fill in "password"
    const passwordField = await $$(`//*[@class='android.widget.EditText' and (@text='password' or .='password')]`);
    await passwordField[0].setValue('red123'); // password
    await passwordField[1].setValue('red123'); // confirm password

    // Tap "Sign up" button
    await $(`//*[@class='android.widget.TextView' and (@text='Sign up' or .='Sign up')]`).click();
    
    // Handle alert pop-up (text: Form submitted successfully!)
    const alertTitle = await $(`android=new UiSelector().textContains("Form submitted successfully!")`);
    await alertTitle.waitForExist({ timeout: 5000 });

    const alertOK = await $(`android=new UiSelector().text("OK")`);
    await alertOK.click();
  });
});
