package Pages;

import Base.PageSetUp;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.io.File;
import java.io.IOException;



public class OrderConfirmationPage extends PageSetUp {
    public OrderConfirmationPage(WebDriver driver) {
        super(driver);
    }

    @FindBy(xpath = "//*[@id=\"order-items\"]/div/table/tbody/tr[1]/td[2]")
    WebElement TotalPrice;
    @FindBy(xpath = "//*[@id=\"_mobile_user_info\"]/div/a[2]/i")
    WebElement AccountPage;
    @FindBy(xpath = "//*[@id=\"order-details\"]/ul/li[1]")
    WebElement OrderReference;
    @FindBy(xpath = "//*[@id=\"content\"]/div")
    WebElement Confirmation;

    public void GoToProfile() {
        AccountPage.click();
    }

    public void SaveDetails(String path) throws IOException{
        File ScrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        Confirmation.getScreenshotAs(OutputType.FILE);

            FileUtils.copyFile(ScrFile, new File(path));}
}
