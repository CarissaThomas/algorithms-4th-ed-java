

public class QuickFindUF 
{
    private int[] id;

    public QuickFindUF(int N)
    {
        id = new int[N]; //Creates new array from parameter
        for (int i = 0; i < N; i++)
            id[i] = i;
    }


}