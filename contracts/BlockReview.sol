// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract BlockReview {
    struct Review {
        address reviewer;
        uint rating;
        string comments;
    }

    struct Project {
        uint id;
        string name;
        uint reviewCount;
    }

    mapping(uint => Project) public projects;
    mapping(uint => mapping(uint => Review)) public projectReviews;

    uint public projectCount = 0;

    function addProject(string memory _name) public {
        projectCount++;
        projects[projectCount] = Project(projectCount, _name, 0);
    }

    function addReview(
        uint _projectId,
        uint _rating,
        string memory _comments
    ) public {
        require(_rating >= 1 && _rating <= 5, "Rating must be between 1 and 5");
        require(projects[_projectId].id != 0, "Project does not exist");

        projects[_projectId].reviewCount++;
        uint reviewId = projects[_projectId].reviewCount;
        projectReviews[_projectId][reviewId] = Review(
            msg.sender,
            _rating,
            _comments
        );
    }

    function getReviews(
        uint _projectId
    ) public view returns (address[] memory, uint[] memory, string[] memory) {
        require(projects[_projectId].id != 0, "Project does not exist");

        uint reviewCount = projects[_projectId].reviewCount;
        address[] memory reviewers = new address[](reviewCount);
        uint[] memory ratings = new uint[](reviewCount);
        string[] memory comments = new string[](reviewCount);

        for (uint i = 1; i <= reviewCount; i++) {
            Review memory review = projectReviews[_projectId][i];
            reviewers[i - 1] = review.reviewer;
            ratings[i - 1] = review.rating;
            comments[i - 1] = review.comments;
        }

        return (reviewers, ratings, comments);
    }

    function getReviewCount(uint _projectId) public view returns (uint) {
        require(projects[_projectId].id != 0, "Project does not exist");
        return projects[_projectId].reviewCount;
    }
}
