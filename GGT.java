package uebungen.GGT;

import java.util.Scanner;

public class GGT {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        int m;
        int n;

        if (a <= 0 || b <= 0) {
            System.out.println("Fehler");
            System.exit(0);
        }
            m = a;
            n = b;
        while (n != 0) {
         if (m < n) {
            int temp = m;
            m = n;
            n = temp;
        }
        int r = m -n;
        m = n;
        n = r;   
    }
    System.out.println("GGT: " + m);
}
}
