var account_field = document.getElementById("account-field");
var full_profile = document.getElementById("full-profile");
var open_account_field = false;
function ShowProfile()
{
    if (!open_account_field)
    {
        full_profile.style.display = "flex";
        account_field.style.height = "32%";
        open_account_field = true;
        setTimeout(function() {
            full_profile.style.opacity = "1";
        }, 100);
    }
    else
    {
        account_field.style.height = "10.5%";
        open_account_field = false;
        full_profile.style.opacity = "0";
        setTimeout(function() {
            full_profile.style.display = "none";
        }, 200);
    }
}
