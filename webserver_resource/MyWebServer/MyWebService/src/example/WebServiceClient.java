//Reference for user input using a scanner:
//https://www.w3schools.com/java/java_user_input.asp


package example;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Scanner;

import javax.xml.namespace.QName;
import javax.xml.ws.Service;

public class WebServiceClient {

	public static void main(String[] args) throws MalformedURLException	{
		//TODO Auto-generated method stub
		URL url=new URL("http://localhost:8080/MyWebService/WebServiceInterface?wsdl");
		QName qname = new QName("http://example/", "WebService");
		Service service = Service.create(url, qname);
		WebServiceInterface callWebService=service.getPort(WebServiceInterface.class);
		System.out.println("Serviceoutput:\n"+callWebService.greet("WebServiceClient"));

		System.out.println ("Note: Please use specified formatting (e.g. examples below) to get real time data");
		Scanner scanCity = new Scanner(System.in);
		System.out.println ("Please enter the desired city name: (e.g. Wellington)");
		String cityName = scanCity.nextLine();
		Scanner scanCountry = new Scanner(System.in);
		System.out.println ("Please enter the desired country name: (e.g. nz)");
		String countryName = scanCountry.nextLine();
		scanCity.close();
		scanCountry.close();
		WebServiceInterface callRealTimeService=service.getPort(WebServiceInterface.class);
		System.out.println("RealTimeoutput(RealTime):\n"+callRealTimeService.realTime(cityName, countryName));
	}
}
