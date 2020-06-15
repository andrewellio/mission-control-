import com.google.gson.Gson;

import javax.swing.*;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class JsonParser {

    public static void main(String[] args) {
        new JsonParser().readJsonfile();
    }

    public String parserJsonArray(String jsonArray) {
        Gson gson = new Gson();
        String jsonString = gson.toJson(jsonArray); //convert to json string
        return jsonString;
    }

    public void readJsonfile() {
        JFileChooser fileChooser = new JFileChooser();
        fileChooser.setCurrentDirectory(new File("."));
        fileChooser.showDialog(null, "Please Select the File");
        fileChooser.setVisible(true);

        File file = fileChooser.getSelectedFile();
        if (file.canRead()) {
            try {
                Scanner scanner = new Scanner(file);
                while (scanner.hasNextLine()){
                    String line = scanner.nextLine();
                    System.out.println(parserJsonArray(line));
                }
                scanner.close();
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }

        } else
            System.out.println("File can not read!");
    }
}

