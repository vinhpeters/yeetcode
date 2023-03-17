fn main() {
    let n = 2;
    let distinct_ways = climb_stairs(n);
    println!("There are {} distinct ways to climb {} steps.", distinct_ways, n);
}


fn climb_stairs(n: i32) -> i32 {
    if n <= 2 {
        return n;
    }

    let mut dp = vec![0; n as usize + 1];
    dp[1] = 1;
    dp[2] = 2;

    for i in 3..=n as usize {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    dp[n as usize]
}

#[cfg(test)]

mod tests {
    use super::*;

    #[test]
    fn test_climb_stairs() {
        assert_eq!(climb_stairs(2), 2);
        assert_eq!(climb_stairs(3), 3);
        assert_eq!(climb_stairs(4), 5);
        assert_eq!(climb_stairs(5), 8);
        assert_eq!(climb_stairs(6), 13);
        assert_eq!(climb_stairs(7), 21);
    }
}





