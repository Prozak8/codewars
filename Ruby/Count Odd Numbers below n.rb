# Given a number n, return the number of positive odd numbers below n, EASY!

def oddCount n
    n / 2
end

def oddCount n 
    if n.even?
        return n / 2
    else
        return (n - 1) / 2
    end
end
